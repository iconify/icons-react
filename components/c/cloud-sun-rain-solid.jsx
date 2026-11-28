import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfl2v5b2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfl2v5b2v"/>`,
		"fallback": "iconaut:cloud-sun-rain-solid",
	});
}

export default Component;
