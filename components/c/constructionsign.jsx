import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dw9fgdciv.css';
import '../../css/f/fcozcbcdu.css';
import '../../css/v/vuax4ju9q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dw9fgdciv"/><path class="fcozcbcdu"/><path class="vuax4ju9q"/>`,
		"fallback": "fxemoji:constructionsign",
	});
}

export default Component;
