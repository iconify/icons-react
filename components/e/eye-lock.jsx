import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncj33lm3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncj33lm3y"/>`,
		"fallback": "mdi:eye-lock",
	});
}

export default Component;
