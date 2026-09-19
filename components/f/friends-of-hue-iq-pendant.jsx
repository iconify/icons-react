import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6g0efk1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6g0efk1l"/>`,
		"fallback": "cbi:friends-of-hue-iq-pendant",
	});
}

export default Component;
