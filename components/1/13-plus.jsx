import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldx1wpbtz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldx1wpbtz"/>`,
		"fallback": "uil:13-plus",
	});
}

export default Component;
