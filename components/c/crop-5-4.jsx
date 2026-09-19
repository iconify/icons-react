import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w13w75bur.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w13w75bur"/>`,
		"fallback": "zmdi:crop-5-4",
	});
}

export default Component;
