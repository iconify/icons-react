import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmp8_bcja.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmp8_bcja"/>`,
		"fallback": "fa6-brands:hotjar",
	});
}

export default Component;
