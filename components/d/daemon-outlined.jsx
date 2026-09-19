import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvb50glwu.css';
import '../../css/f/fj1-tkbqz.css';
import '../../css/h/hwoc3ibiy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvb50glwu"/><path class="fj1-tkbqz"/><path class="hwoc3ibiy"/>`,
		"fallback": "eos-icons:daemon-outlined",
	});
}

export default Component;
