import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9w0ejb6k.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9w0ejb6k"/>`,
		"fallback": "dinkie-icons:clipboard-small",
	});
}

export default Component;
