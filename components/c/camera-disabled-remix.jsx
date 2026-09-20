import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/toe58qfqr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="toe58qfqr"/>`,
		"fallback": "streamline:camera-disabled-remix",
	});
}

export default Component;
