import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tn_kq0bln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tn_kq0bln"/>`,
		"fallback": "solar:arrow-right-up-broken",
	});
}

export default Component;
