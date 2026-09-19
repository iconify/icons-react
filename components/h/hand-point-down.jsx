import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfzdz_hbw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfzdz_hbw"/>`,
		"fallback": "cil:hand-point-down",
	});
}

export default Component;
