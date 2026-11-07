import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue6q9sbkc.css';
import '../../css/d/d27n8y_ge.css';
import '../../css/r/rqt1aybfd.css';
import '../../css/l/l74sf0b6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ue6q9sbkc"/><path class="d27n8y_ge"/><path class="rqt1aybfd"/><path class="l74sf0b6r"/>`,
		"fallback": "solar:cart-cross-bold-duotone",
	});
}

export default Component;
