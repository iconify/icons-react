import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcxj3j5_m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcxj3j5_m"/>`,
		"fallback": "uiw:eye-o",
	});
}

export default Component;
