import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swq5rfb6j.css';
import '../../css/h/h41ur506h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swq5rfb6j"/><path class="h41ur506h"/>`,
		"fallback": "streamline-ultimate:bowling-set-bold",
	});
}

export default Component;
