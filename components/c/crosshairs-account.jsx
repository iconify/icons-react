import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv1mpk7pw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hv1mpk7pw"/>`,
		"fallback": "mdi:crosshairs-account",
	});
}

export default Component;
