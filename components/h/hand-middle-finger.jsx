import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iuvhuy_rh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iuvhuy_rh"/>`,
		"fallback": "fa-solid:hand-middle-finger",
	});
}

export default Component;
