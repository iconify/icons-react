import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nta5e4bsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nta5e4bsz"/>`,
		"fallback": "mdi:clock-start",
	});
}

export default Component;
