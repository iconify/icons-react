import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sd82cvbbl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sd82cvbbl"/>`,
		"fallback": "codicon:git-branch",
	});
}

export default Component;
