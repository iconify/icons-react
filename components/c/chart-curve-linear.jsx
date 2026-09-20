import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvmh88bao.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvmh88bao"/>`,
		"fallback": "ix:chart-curve-linear",
	});
}

export default Component;
