import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8g9pgb0j.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d8g9pgb0j"/>`,
		"fallback": "fa6-brands:firstdraft",
	});
}

export default Component;
