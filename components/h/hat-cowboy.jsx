import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1nvt7bqe.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1nvt7bqe"/>`,
		"fallback": "fa7-solid:hat-cowboy",
	});
}

export default Component;
