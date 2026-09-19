import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o22u0m-kw.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o22u0m-kw"/>`,
		"fallback": "ep:arrow-right",
	});
}

export default Component;
