import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q61yqbc-y.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q61yqbc-y"/>`,
		"fallback": "fa7-solid:grin-squint-tears",
	});
}

export default Component;
