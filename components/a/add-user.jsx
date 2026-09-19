import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f310sub7r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f310sub7r"/>`,
		"fallback": "icons8:add-user",
	});
}

export default Component;
