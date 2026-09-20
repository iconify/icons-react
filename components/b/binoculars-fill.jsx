import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssqkpgb1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ssqkpgb1r"/>`,
		"fallback": "ri:binoculars-fill",
	});
}

export default Component;
