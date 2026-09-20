import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rht-jrsfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rht-jrsfz"/>`,
		"fallback": "reicon:arrow-circle-left-filled",
	});
}

export default Component;
