import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqlfl2olr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqlfl2olr"/>`,
		"fallback": "ri:font-size",
	});
}

export default Component;
