import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpnbl9yww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dpnbl9yww"/>`,
		"fallback": "noviair-light:fingerprint-lock",
	});
}

export default Component;
