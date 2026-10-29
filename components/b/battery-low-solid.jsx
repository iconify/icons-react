import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vyap6kq9x.css';
import '../../css/m/mkibynbaa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="vyap6kq9x"/><path class="mkibynbaa wm-a"/></g>`,
		"fallback": "withicons:battery-low-solid",
	});
}

export default Component;
