import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r16t1096v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r16t1096v"/>`,
		"fallback": "cryptocurrency:flux",
	});
}

export default Component;
