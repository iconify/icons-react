import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hk40vyc-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hk40vyc-m"/>`,
		"fallback": "heroicons:cursor-arrow-rays",
	});
}

export default Component;
