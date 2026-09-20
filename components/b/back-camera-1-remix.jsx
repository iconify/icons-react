import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tx8h7_bdz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tx8h7_bdz"/>`,
		"fallback": "streamline:back-camera-1-remix",
	});
}

export default Component;
