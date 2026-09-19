import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwbei4b3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwbei4b3h"/>`,
		"fallback": "cbi:bulb-group-sultan-spot",
	});
}

export default Component;
