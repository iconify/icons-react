import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfh9rvbcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sfh9rvbcc"/>`,
		"fallback": "qlementine-icons:chevron-up-24",
	});
}

export default Component;
