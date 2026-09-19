import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/it67cvzui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="it67cvzui"/>`,
		"fallback": "cbi:bulb-group-golfball-e14",
	});
}

export default Component;
