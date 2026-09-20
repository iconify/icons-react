import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwb03actr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwb03actr"/>`,
		"fallback": "thesvg-color:cbs",
	});
}

export default Component;
