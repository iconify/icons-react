import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tswz3gg_a.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tswz3gg_a"/>`,
		"fallback": "jam:arrow-square-down-left-f",
	});
}

export default Component;
