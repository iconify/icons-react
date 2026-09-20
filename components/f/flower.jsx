import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hi1xs8bnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hi1xs8bnb"/>`,
		"fallback": "uil:flower",
	});
}

export default Component;
