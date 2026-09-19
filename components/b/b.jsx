import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-kbcn09w.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-kbcn09w"/>`,
		"fallback": "whh:b",
	});
}

export default Component;
