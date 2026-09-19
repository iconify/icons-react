import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pa9rbvabr.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pa9rbvabr"/>`,
		"fallback": "fluent-mdl2:descending",
	});
}

export default Component;
