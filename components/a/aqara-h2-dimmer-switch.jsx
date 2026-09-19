import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um8f6_zry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="um8f6_zry"/>`,
		"fallback": "cbi:aqara-h2-dimmer-switch",
	});
}

export default Component;
