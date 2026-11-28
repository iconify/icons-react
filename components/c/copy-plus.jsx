import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ds0ogqb_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ds0ogqb_u"/>`,
		"fallback": "noviair-light:copy-plus",
	});
}

export default Component;
