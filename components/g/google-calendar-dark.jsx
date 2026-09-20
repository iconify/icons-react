import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdjg2gbpd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdjg2gbpd"/>`,
		"fallback": "selfhst:google-calendar-dark",
	});
}

export default Component;
