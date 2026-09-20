import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4hp8l9sr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4hp8l9sr"/>`,
		"fallback": "prime:comment",
	});
}

export default Component;
