import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4tm_e4lw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4tm_e4lw"/>`,
		"fallback": "mynaui:brand-codepen-solid",
	});
}

export default Component;
