import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhr_z3b9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhr_z3b9x"/>`,
		"fallback": "thesvg:h3",
	});
}

export default Component;
