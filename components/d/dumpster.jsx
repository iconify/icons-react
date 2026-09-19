import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_-8tnb_w.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_-8tnb_w"/>`,
		"fallback": "fa7-solid:dumpster",
	});
}

export default Component;
