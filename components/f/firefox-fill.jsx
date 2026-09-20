import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bivnitf6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bivnitf6t"/>`,
		"fallback": "ri:firefox-fill",
	});
}

export default Component;
