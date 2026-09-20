import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmk7s0b-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmk7s0b-s"/>`,
		"fallback": "meteor-icons:bars",
	});
}

export default Component;
