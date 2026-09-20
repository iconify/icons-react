import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0e5g6bbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b0e5g6bbx"/>`,
		"fallback": "streamline-logos:foursquare-logo-solid",
	});
}

export default Component;
