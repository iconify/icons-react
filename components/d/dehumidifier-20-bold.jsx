import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp_3l1bkn.css';
import '../../css/k/kyukd-byb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fp_3l1bkn"/><path class="kyukd-byb"/>`,
		"fallback": "energy-icons:dehumidifier-20-bold",
	});
}

export default Component;
