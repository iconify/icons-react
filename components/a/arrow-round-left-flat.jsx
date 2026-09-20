import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3wdlk2ci.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d3wdlk2ci"/>`,
		"fallback": "streamline-color:arrow-round-left-flat",
	});
}

export default Component;
