import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wafu_qb-m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wafu_qb-m"/>`,
		"fallback": "carbon:earth-europe-africa",
	});
}

export default Component;
