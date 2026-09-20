import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqpu1tbsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqpu1tbsz"/>`,
		"fallback": "mdi:announcement",
	});
}

export default Component;
