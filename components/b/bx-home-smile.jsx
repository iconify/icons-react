import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tho4hgacv.css';
import '../../css/l/lj8aahbyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tho4hgacv"/><path class="lj8aahbyl"/>`,
		"fallback": "bx:bx-home-smile",
	});
}

export default Component;
