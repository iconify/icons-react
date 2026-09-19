import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drlghjk_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drlghjk_d"/>`,
		"fallback": "cbi:friends-of-hue-retrotouch-black-plain",
	});
}

export default Component;
