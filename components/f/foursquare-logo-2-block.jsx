import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ds9k9lg1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ds9k9lg1m"/>`,
		"fallback": "streamline-logos:foursquare-logo-2-block",
	});
}

export default Component;
