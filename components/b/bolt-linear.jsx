import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vd1l1p81t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vd1l1p81t"/>`,
		"fallback": "solar:bolt-linear",
	});
}

export default Component;
