import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/np8z34b5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="np8z34b5s"/>`,
		"fallback": "bxs:adjust",
	});
}

export default Component;
