import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcj4w92ez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcj4w92ez"/>`,
		"fallback": "solar:alt-arrow-left-broken",
	});
}

export default Component;
