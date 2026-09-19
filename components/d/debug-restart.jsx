import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1umn1een.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1umn1een"/>`,
		"fallback": "codicon:debug-restart",
	});
}

export default Component;
