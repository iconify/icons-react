import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpny1ho_k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpny1ho_k"/>`,
		"fallback": "ix:arrow-up",
	});
}

export default Component;
