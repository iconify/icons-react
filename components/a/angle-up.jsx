import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vb337052r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vb337052r"/>`,
		"fallback": "uis:angle-up",
	});
}

export default Component;
