import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f91lhmb6q.css';
import '../../css/s/sv5qa1b8r.css';
import '../../css/m/mkpacubsd.css';
import '../../css/l/l5rfbdc0r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f91lhmb6q"/><path class="sv5qa1b8r"/><path class="mkpacubsd"/><path class="l5rfbdc0r"/>`,
		"fallback": "fxemoji:closedmailboxlowered",
	});
}

export default Component;
