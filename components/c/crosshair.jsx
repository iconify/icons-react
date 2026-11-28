import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfvns8u-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfvns8u-d"/>`,
		"fallback": "noviair-light:crosshair",
	});
}

export default Component;
