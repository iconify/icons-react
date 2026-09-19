import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrul7pbzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrul7pbzr"/>`,
		"fallback": "iconoir:fast-arrow-bottom",
	});
}

export default Component;
