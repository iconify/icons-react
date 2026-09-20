import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odc5s1qbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odc5s1qbp"/>`,
		"fallback": "mdi-light:home",
	});
}

export default Component;
