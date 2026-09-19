import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdzi00bpt.css';
import '../../css/y/y96pjh_pw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdzi00bpt"/><path class="y96pjh_pw"/>`,
		"fallback": "bx:bx-chart",
	});
}

export default Component;
