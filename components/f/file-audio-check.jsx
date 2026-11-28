import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qu2n5ibht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qu2n5ibht"/>`,
		"fallback": "noviair-light:file-audio-check",
	});
}

export default Component;
