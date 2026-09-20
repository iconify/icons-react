import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhogn0bqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhogn0bqv"/>`,
		"fallback": "thesvg:caldotcom",
	});
}

export default Component;
