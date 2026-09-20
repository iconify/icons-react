import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gojyo4b_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gojyo4b_n"/>`,
		"fallback": "streamline-logos:foursquare-logo-1-block",
	});
}

export default Component;
