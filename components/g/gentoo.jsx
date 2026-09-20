import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shy0fyb2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shy0fyb2r"/>`,
		"fallback": "mdi:gentoo",
	});
}

export default Component;
