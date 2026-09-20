import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-7ks6boq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-7ks6boq"/>`,
		"fallback": "mdi:arrow-u-up-left",
	});
}

export default Component;
