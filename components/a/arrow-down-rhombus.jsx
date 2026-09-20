import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sr9vg-bzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sr9vg-bzb"/>`,
		"fallback": "tabler:arrow-down-rhombus",
	});
}

export default Component;
