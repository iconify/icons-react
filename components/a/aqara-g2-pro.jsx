import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m03rwol8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m03rwol8t"/>`,
		"fallback": "cbi:aqara-g2-pro",
	});
}

export default Component;
