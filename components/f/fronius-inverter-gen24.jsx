import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rteos1-3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rteos1-3m"/>`,
		"fallback": "cbi:fronius-inverter-gen24",
	});
}

export default Component;
