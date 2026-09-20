import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kd_g14sid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kd_g14sid"/>`,
		"fallback": "mdi:hd-box",
	});
}

export default Component;
