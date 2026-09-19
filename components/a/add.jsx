import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj-zwf-qp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fj-zwf-qp"/>`,
		"fallback": "cryptocurrency:add",
	});
}

export default Component;
