import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tll6oktfz.css';

const viewBox = {"width":27,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tll6oktfz"/>`,
		"fallback": "fontisto:bitbucket",
	});
}

export default Component;
