import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsz6-0r-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dsz6-0r-w"/>`,
		"fallback": "streamline-logos:dropbox-logo-1-block",
	});
}

export default Component;
