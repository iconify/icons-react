import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byjpmcj3x.css';

const viewBox = {"width":280,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byjpmcj3x"/>`,
		"fallback": "ps:egg",
	});
}

export default Component;
