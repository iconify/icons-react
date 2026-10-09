import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vng_kgbvl.css';
import '../../css/k/ke73g8b7v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vng_kgbvl"/><path class="ke73g8b7v"/>`,
		"fallback": "energy-icons:energy-efficiency-20",
	});
}

export default Component;
