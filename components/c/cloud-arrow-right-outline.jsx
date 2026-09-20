import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gua1uqcfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gua1uqcfk"/>`,
		"fallback": "mdi:cloud-arrow-right-outline",
	});
}

export default Component;
