import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vul6x61nq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vul6x61nq"/>`,
		"fallback": "mdi:arrow-bottom",
	});
}

export default Component;
