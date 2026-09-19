import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzca4zbth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzca4zbth"/>`,
		"fallback": "iconamoon:arrow-right-2-light",
	});
}

export default Component;
