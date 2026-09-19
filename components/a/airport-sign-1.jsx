import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxt3-pber.css';
import '../../css/k/k18y-k1ul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxt3-pber"/><path class="k18y-k1ul"/>`,
		"fallback": "circum:airport-sign-1",
	});
}

export default Component;
