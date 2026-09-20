import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/haqr67bmp.css';
import '../../css/e/e2-vdac3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="haqr67bmp"/><path class="e2-vdac3t"/>`,
		"fallback": "mingcute:fan-direction-front-line",
	});
}

export default Component;
