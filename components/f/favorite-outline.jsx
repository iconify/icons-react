import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecm9edcrh.css';

const viewBox = {"width":432,"height":392};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecm9edcrh"/>`,
		"fallback": "zmdi:favorite-outline",
	});
}

export default Component;
