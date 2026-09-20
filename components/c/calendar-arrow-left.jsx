import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apn_b4pdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apn_b4pdw"/>`,
		"fallback": "keyline-icons:calendar-arrow-left",
	});
}

export default Component;
