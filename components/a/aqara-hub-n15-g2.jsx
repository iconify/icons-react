import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojdde1gbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojdde1gbw"/>`,
		"fallback": "cbi:aqara-hub-n15-g2",
	});
}

export default Component;
