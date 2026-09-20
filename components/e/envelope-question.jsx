import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ay4xc3ohy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ay4xc3ohy"/>`,
		"fallback": "uil:envelope-question",
	});
}

export default Component;
