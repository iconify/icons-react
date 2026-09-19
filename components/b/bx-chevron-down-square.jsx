import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdzi00bpt.css';
import '../../css/h/hyrpu7bwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdzi00bpt"/><path class="hyrpu7bwm"/>`,
		"fallback": "bx:bx-chevron-down-square",
	});
}

export default Component;
