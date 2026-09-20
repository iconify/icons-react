import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfkb007lh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfkb007lh"/>`,
		"fallback": "streamline-ultimate:fruit-banana-bold",
	});
}

export default Component;
