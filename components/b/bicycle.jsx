import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w355t0b1u.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w355t0b1u"/>`,
		"fallback": "wpf:bicycle",
	});
}

export default Component;
