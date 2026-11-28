import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wzv-enb-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wzv-enb-q"/>`,
		"fallback": "noviair-light:hotel-check",
	});
}

export default Component;
