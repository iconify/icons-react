import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grv2xbbrt.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grv2xbbrt"/>`,
		"fallback": "fontisto:forward",
	});
}

export default Component;
