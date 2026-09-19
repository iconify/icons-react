import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrlw1ob2d.css';
import '../../css/p/p_titlbgv.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrlw1ob2d"/><path class="p_titlbgv"/>`,
		"fallback": "fxemoji:brokenheart",
	});
}

export default Component;
