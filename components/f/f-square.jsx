import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmpahqb1q.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmpahqb1q"/>`,
		"fallback": "vs:f-square",
	});
}

export default Component;
