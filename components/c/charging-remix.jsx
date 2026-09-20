import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4ac3gbqa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q4ac3gbqa"/>`,
		"fallback": "streamline-flex:charging-remix",
	});
}

export default Component;
