import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ol1j8y3wu.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ol1j8y3wu"/>`,
		"fallback": "fa7-solid:chart-area",
	});
}

export default Component;
