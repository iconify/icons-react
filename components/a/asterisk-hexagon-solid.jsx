import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/muej_p33h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="muej_p33h"/>`,
		"fallback": "mynaui:asterisk-hexagon-solid",
	});
}

export default Component;
