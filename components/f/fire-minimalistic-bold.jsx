import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nak10dbno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nak10dbno"/>`,
		"fallback": "solar:fire-minimalistic-bold",
	});
}

export default Component;
