import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/af4cuy1nq.css';
import '../../css/q/qghtzzbrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="af4cuy1nq"/><path class="qghtzzbrg"/>`,
		"fallback": "streamline-freehand:emoji-hand-cheers",
	});
}

export default Component;
