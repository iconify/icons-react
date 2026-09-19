import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_top7b4k.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_top7b4k"/>`,
		"fallback": "whh:circlevine",
	});
}

export default Component;
