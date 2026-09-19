import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syrwku2zi.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="syrwku2zi"/>`,
		"fallback": "fa-solid:hdd",
	});
}

export default Component;
