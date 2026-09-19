import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7gaivhfu.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7gaivhfu"/>`,
		"fallback": "f7:building-2-fill",
	});
}

export default Component;
