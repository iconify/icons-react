import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7yppybli.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7yppybli"/>`,
		"fallback": "fa7-solid:compress-alt",
	});
}

export default Component;
