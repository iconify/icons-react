import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdri3bpee.css';
import '../../css/m/mf-tslbjc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdri3bpee"/><path class="mf-tslbjc"/>`,
		"fallback": "carbon:carbon-for-ibm-product",
	});
}

export default Component;
