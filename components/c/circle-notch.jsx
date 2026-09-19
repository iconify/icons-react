import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmq_q9baz.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmq_q9baz"/>`,
		"fallback": "fa7-solid:circle-notch",
	});
}

export default Component;
