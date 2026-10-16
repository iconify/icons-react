import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybbuh2wlg.css';
import '../../css/v/vz5gujb8y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybbuh2wlg"/><path class="vz5gujb8y"/>`,
		"fallback": "energy-icons:carbon-price-20-bold",
	});
}

export default Component;
