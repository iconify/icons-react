import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrh39abmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrh39abmb"/>`,
		"fallback": "cbi:aqara-air-quality",
	});
}

export default Component;
