import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttrynm31t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttrynm31t"/>`,
		"fallback": "heroicons:arrow-path-rounded-square",
	});
}

export default Component;
