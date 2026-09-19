import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_o7p0b6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_o7p0b6l"/>`,
		"fallback": "cbi:ikea-blind-open",
	});
}

export default Component;
