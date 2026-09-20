import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kaov8kxvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kaov8kxvi"/>`,
		"fallback": "streamline-logos:bbc-iplayer-logo-1",
	});
}

export default Component;
