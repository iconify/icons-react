import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx93j6ozr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hx93j6ozr"/>`,
		"fallback": "cryptocurrency:fldc",
	});
}

export default Component;
