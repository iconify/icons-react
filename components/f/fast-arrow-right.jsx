import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zt8ittjqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zt8ittjqb"/>`,
		"fallback": "iconoir:fast-arrow-right",
	});
}

export default Component;
