import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt9z3uuyv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dt9z3uuyv"/>`,
		"fallback": "selfhst:google-chrome-light",
	});
}

export default Component;
