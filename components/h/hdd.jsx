import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmg_qxorr.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmg_qxorr"/>`,
		"fallback": "el:hdd",
	});
}

export default Component;
