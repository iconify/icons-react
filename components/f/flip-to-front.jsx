import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kych3mbnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kych3mbnc"/>`,
		"fallback": "mdi:flip-to-front",
	});
}

export default Component;
