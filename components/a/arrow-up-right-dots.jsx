import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_8yhzb5m.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_8yhzb5m"/>`,
		"fallback": "fa6-solid:arrow-up-right-dots",
	});
}

export default Component;
