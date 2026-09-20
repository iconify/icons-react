import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwd16lvwe.css';
import '../../css/a/a7b1h8b_y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwd16lvwe"/><path class="a7b1h8b_y"/>`,
		"fallback": "streamline-pixel:coding-apps-websites-programming-browser",
	});
}

export default Component;
