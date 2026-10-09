import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfg1jelsz.css';
import '../../css/f/fec_ntl8c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfg1jelsz"/><path class="fec_ntl8c"/>`,
		"fallback": "energy-icons:coffee-48",
	});
}

export default Component;
