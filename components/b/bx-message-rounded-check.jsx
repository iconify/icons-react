import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oe50l7uuy.css';
import '../../css/q/qmnttjbuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oe50l7uuy"/><path class="qmnttjbuc"/>`,
		"fallback": "bx:bx-message-rounded-check",
	});
}

export default Component;
