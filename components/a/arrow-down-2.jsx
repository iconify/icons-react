import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_dz3ub_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f_dz3ub_a"/>`,
		"fallback": "reicon:arrow-down-2",
	});
}

export default Component;
