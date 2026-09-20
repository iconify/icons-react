import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx6820b9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hx6820b9g"/>`,
		"fallback": "uil:border-right",
	});
}

export default Component;
