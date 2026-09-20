import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3pj0pbmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i3pj0pbmd"/>`,
		"fallback": "streamline-logos:crowdin-logo-block",
	});
}

export default Component;
