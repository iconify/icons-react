import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqc_swu4o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqc_swu4o"/>`,
		"fallback": "ix:helmet-safety",
	});
}

export default Component;
