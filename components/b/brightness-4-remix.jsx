import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2ly8fbsi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q2ly8fbsi"/>`,
		"fallback": "streamline-flex:brightness-4-remix",
	});
}

export default Component;
