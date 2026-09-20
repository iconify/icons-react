import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngkp_tt1z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngkp_tt1z"/>`,
		"fallback": "selfhst:adobe-lightroom-light",
	});
}

export default Component;
