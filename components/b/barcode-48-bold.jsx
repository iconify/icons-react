import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpv1dkbiz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpv1dkbiz"/>`,
		"fallback": "energy-icons:barcode-48-bold",
	});
}

export default Component;
