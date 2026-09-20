import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmtc-2b7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bmtc-2b7u"/>`,
		"fallback": "streamline-logos:hulu-live-tv-logo-solid",
	});
}

export default Component;
