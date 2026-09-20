import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdrja8e0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdrja8e0l"/>`,
		"fallback": "qlementine-icons:arrow-down-24",
	});
}

export default Component;
