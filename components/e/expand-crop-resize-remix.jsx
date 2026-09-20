import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n82eyib4l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n82eyib4l"/>`,
		"fallback": "streamline-flex:expand-crop-resize-remix",
	});
}

export default Component;
