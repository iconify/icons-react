import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipb-aqb_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipb-aqb_o"/>`,
		"fallback": "thesvg:deepnote",
	});
}

export default Component;
