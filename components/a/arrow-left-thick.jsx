import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/av4w2sb3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="av4w2sb3x"/>`,
		"fallback": "akar-icons:arrow-left-thick",
	});
}

export default Component;
