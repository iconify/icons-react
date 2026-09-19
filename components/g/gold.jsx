import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qwx6e8mup.css';
import '../../css/k/khq8ynbxh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="qwx6e8mup"/><path class="khq8ynbxh"/></g>`,
		"fallback": "cryptocurrency-color:gold",
	});
}

export default Component;
