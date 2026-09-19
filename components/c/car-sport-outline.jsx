import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7_fn5bzo.css';
import '../../css/g/g7v3m3bhf.css';
import '../../css/e/eu_shmbfp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7_fn5bzo"/><path class="g7v3m3bhf"/><path class="eu_shmbfp"/>`,
		"fallback": "ion:car-sport-outline",
	});
}

export default Component;
