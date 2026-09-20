import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezq9uabrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezq9uabrd"/>`,
		"fallback": "thesvg-color:elgato",
	});
}

export default Component;
