import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3c-6wbuu.css';
import '../../css/a/ali10ogyu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d3c-6wbuu"/><path class="ali10ogyu"/>`,
		"fallback": "icomoon-free:circle-right",
	});
}

export default Component;
