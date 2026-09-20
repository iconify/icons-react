import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ob2cedcgl.css';
import '../../css/k/kzd394b_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ob2cedcgl"/><path class="kzd394b_r"/>`,
		"fallback": "streamline-freehand:business-coaching-bait-1",
	});
}

export default Component;
