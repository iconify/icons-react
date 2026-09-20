import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj_hqcc3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oj_hqcc3b"/>`,
		"fallback": "mdi:head-plus",
	});
}

export default Component;
