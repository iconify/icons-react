import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln0oe0zwr.css';
import '../../css/c/crznqgb3v.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln0oe0zwr"/><path class="crznqgb3v"/>`,
		"fallback": "lineicons:exit-up",
	});
}

export default Component;
