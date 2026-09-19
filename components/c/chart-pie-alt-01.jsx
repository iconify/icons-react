import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ore0zabin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ore0zabin"/>`,
		"fallback": "griddy-icons:chart-pie-alt-01",
	});
}

export default Component;
