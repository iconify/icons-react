import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/og2ty2bhb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="og2ty2bhb"/>`,
		"fallback": "boxicons:infinite",
	});
}

export default Component;
