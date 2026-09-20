import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oulufsb2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oulufsb2k"/>`,
		"fallback": "mdi:box-cutter-off",
	});
}

export default Component;
