import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovax80bai.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovax80bai"/>`,
		"fallback": "simple-line-icons:earphones-alt",
	});
}

export default Component;
