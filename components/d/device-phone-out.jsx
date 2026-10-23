import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zyuoj61bc.css';
import '../../css/p/pkmwr46yn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(-90 5.39 22.25)" class="zyuoj61bc"/><path class="pkmwr46yn"/></g>`,
		"fallback": "andrsrxn:device-phone-out",
	});
}

export default Component;
