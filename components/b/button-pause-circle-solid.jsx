import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ave6_-bix.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ave6_-bix"/>`,
		"fallback": "streamline-flex:button-pause-circle-solid",
	});
}

export default Component;
