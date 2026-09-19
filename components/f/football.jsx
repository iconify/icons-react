import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c274zs7rb.css';
import '../../css/m/mwlmtkbnp.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c274zs7rb"/><path class="mwlmtkbnp"/>`,
		"fallback": "ep:football",
	});
}

export default Component;
