import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iza0mcbel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iza0mcbel"/>`,
		"fallback": "cbi:appletv-sim",
	});
}

export default Component;
