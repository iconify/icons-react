import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mweq_bbtf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mweq_bbtf"/>`,
		"fallback": "fa6-solid:helmet-un",
	});
}

export default Component;
