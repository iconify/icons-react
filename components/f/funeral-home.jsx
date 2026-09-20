import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnaf7qbot.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnaf7qbot"/>`,
		"fallback": "map:funeral-home",
	});
}

export default Component;
