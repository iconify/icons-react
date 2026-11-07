import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icpnc-zav.css';
import '../../css/f/fkh-yubxj.css';
import '../../css/j/j61w4jzst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icpnc-zav"/><path class="fkh-yubxj"/><path class="j61w4jzst"/>`,
		"fallback": "solar:earth-bold",
	});
}

export default Component;
