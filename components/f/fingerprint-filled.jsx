import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ji9nld9gb.css';
import '../../css/r/rg45w14ll.css';
import '../../css/v/vi504dbkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ji9nld9gb"/><path class="rg45w14ll"/><path class="vi504dbkq"/>`,
		"fallback": "boxicons:fingerprint-filled",
	});
}

export default Component;
