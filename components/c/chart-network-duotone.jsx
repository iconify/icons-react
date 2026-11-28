import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjfo7acdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjfo7acdd primary"/>`,
		"fallback": "iconaut:chart-network-duotone",
	});
}

export default Component;
