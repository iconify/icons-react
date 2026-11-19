import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agx3irc7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agx3irc7a"/>`,
		"fallback": "andrsrxn:chevron-up-line",
	});
}

export default Component;
