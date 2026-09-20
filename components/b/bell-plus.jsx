import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cj0_rabtz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cj0_rabtz"/>`,
		"fallback": "vadivam:bell-plus",
	});
}

export default Component;
