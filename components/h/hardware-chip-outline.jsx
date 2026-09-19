import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekoozwbhq.css';
import '../../css/c/csilaps2y.css';
import '../../css/n/nz2-r9bsm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="ekoozwbhq"/><rect class="csilaps2y"/><path class="nz2-r9bsm"/>`,
		"fallback": "ion:hardware-chip-outline",
	});
}

export default Component;
