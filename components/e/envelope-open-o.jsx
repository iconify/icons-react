import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmr9r7v8h.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmr9r7v8h"/>`,
		"fallback": "fa:envelope-open-o",
	});
}

export default Component;
