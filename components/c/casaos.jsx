import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg1_5mbwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xg1_5mbwa"/>`,
		"fallback": "cbi:casaos",
	});
}

export default Component;
