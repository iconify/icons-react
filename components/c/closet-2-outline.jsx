import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmxb9gbld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fmxb9gbld"/>`,
		"fallback": "solar:closet-2-outline",
	});
}

export default Component;
