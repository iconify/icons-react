import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihp0-kb6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihp0-kb6s"/>`,
		"fallback": "thesvg:flathub",
	});
}

export default Component;
