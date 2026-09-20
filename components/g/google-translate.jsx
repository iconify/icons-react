import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4ppg0-7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4ppg0-7m"/>`,
		"fallback": "thesvg:google-translate",
	});
}

export default Component;
