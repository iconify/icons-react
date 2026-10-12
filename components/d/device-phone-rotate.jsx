import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wswqiebpi.css';
import '../../css/m/mzp3bu2rz.css';
import '../../css/x/x_duj5byl.css';
import '../../css/g/gpavjvp5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(-60 4.07 16.33)" class="wswqiebpi"/><rect transform="rotate(-60 4.07 16.33)" class="mzp3bu2rz"/><path class="x_duj5byl"/><path class="gpavjvp5n"/></g>`,
		"fallback": "andrsrxn:device-phone-rotate",
	});
}

export default Component;
