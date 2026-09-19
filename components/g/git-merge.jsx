import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyfv3kbmk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gyfv3kbmk"/>`,
		"fallback": "codicon:git-merge",
	});
}

export default Component;
