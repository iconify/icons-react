import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5b2kyb9t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5b2kyb9t"/>`,
		"fallback": "ooui:cancel",
	});
}

export default Component;
