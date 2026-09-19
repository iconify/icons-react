import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_x1y4muz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_x1y4muz"/>`,
		"fallback": "bxl:hashnode",
	});
}

export default Component;
