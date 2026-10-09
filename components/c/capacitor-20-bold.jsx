import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emd2oxpxc.css';
import '../../css/x/xtzb6uzhb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emd2oxpxc"/><path class="xtzb6uzhb"/>`,
		"fallback": "energy-icons:capacitor-20-bold",
	});
}

export default Component;
