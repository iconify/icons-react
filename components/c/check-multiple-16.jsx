import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1s0wnp6w.css';
import '../../css/z/zqzhegyvw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q1s0wnp6w"/><path class="zqzhegyvw"/>`,
		"fallback": "qlementine-icons:check-multiple-16",
	});
}

export default Component;
