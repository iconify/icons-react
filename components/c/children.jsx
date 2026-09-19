import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9weqsb0q.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9weqsb0q"/>`,
		"fallback": "fa7-solid:children",
	});
}

export default Component;
