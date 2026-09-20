import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk0lrcc_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yk0lrcc_d"/>`,
		"fallback": "keyline-icons:arrow-big-down-sharp",
	});
}

export default Component;
