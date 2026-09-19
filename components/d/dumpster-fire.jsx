import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zme58pbcq.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zme58pbcq"/>`,
		"fallback": "fa7-solid:dumpster-fire",
	});
}

export default Component;
