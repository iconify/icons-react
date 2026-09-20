import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4tmdyemy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x4tmdyemy"/>`,
		"fallback": "streamline-flex:graph-bar-increase-square-solid",
	});
}

export default Component;
