import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xj_94xbsg.css';
import '../../css/o/o_kremszb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xj_94xbsg"/><path class="o_kremszb"/>`,
		"fallback": "boxicons:backpack-star",
	});
}

export default Component;
