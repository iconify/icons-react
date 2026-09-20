import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hl_6u4_hl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hl_6u4_hl"/>`,
		"fallback": "selfhst:google-home-light",
	});
}

export default Component;
