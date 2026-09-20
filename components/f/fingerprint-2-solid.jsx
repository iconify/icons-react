import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fc0js2y2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fc0js2y2r"/>`,
		"fallback": "streamline-sharp:fingerprint-2-solid",
	});
}

export default Component;
