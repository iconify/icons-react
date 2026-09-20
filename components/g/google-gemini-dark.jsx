import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rptwl7fjn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rptwl7fjn"/>`,
		"fallback": "selfhst:google-gemini-dark",
	});
}

export default Component;
