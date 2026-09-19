import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyzn85bno.css';
import '../../css/t/tky-zccgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyzn85bno"/><path class="tky-zccgd"/>`,
		"fallback": "bx:bxs-thermometer",
	});
}

export default Component;
