import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlt2f1bjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlt2f1bjr"/>`,
		"fallback": "uis:angle-right",
	});
}

export default Component;
