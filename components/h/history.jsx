import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0tfvsbut.css';
import '../../css/q/qc7bzg-vt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0tfvsbut"/><path class="qc7bzg-vt"/>`,
		"fallback": "cil:history",
	});
}

export default Component;
