import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/te_6-yblo.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="te_6-yblo"/>`,
		"fallback": "whh:fluxbb",
	});
}

export default Component;
