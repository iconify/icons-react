import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iq5ztorps.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iq5ztorps"/>`,
		"fallback": "selfhst:gramps-light",
	});
}

export default Component;
