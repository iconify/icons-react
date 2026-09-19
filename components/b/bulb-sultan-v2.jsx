import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhgguqqyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhgguqqyx"/>`,
		"fallback": "cbi:bulb-sultan-v2",
	});
}

export default Component;
