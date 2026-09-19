import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uc8zf3buz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uc8zf3buz"/>`,
		"fallback": "hugeicons:filter-add",
	});
}

export default Component;
