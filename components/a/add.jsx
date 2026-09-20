import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cek6ewbqe.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cek6ewbqe"/>`,
		"fallback": "iwwa:add",
	});
}

export default Component;
