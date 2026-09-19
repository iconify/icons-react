import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lm7hx7-he.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lm7hx7-he"/>`,
		"fallback": "griddy-icons:google-filled",
	});
}

export default Component;
