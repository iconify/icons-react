import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3746f4im.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l3746f4im"/>`,
		"fallback": "griddy-icons:chart-bar-square-plus",
	});
}

export default Component;
