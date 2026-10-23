import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djdd0mbut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djdd0mbut"/>`,
		"fallback": "vadivam:cloud-rain",
	});
}

export default Component;
