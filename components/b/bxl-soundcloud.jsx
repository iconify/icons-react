import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kldny2m9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kldny2m9l"/>`,
		"fallback": "bx:bxl-soundcloud",
	});
}

export default Component;
