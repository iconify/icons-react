import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4lsulo_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4lsulo_w"/>`,
		"fallback": "mdi:air-conditioner",
	});
}

export default Component;
