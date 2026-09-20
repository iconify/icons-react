import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2wv40b-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2wv40b-s"/>`,
		"fallback": "token:bcdt",
	});
}

export default Component;
