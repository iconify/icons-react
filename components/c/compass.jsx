import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsawhh26k.css';
import '../../css/u/uuqt_yb-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsawhh26k"/><path class="uuqt_yb-q"/>`,
		"fallback": "prime:compass",
	});
}

export default Component;
