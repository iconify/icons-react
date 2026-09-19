import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucnqb3dtq.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucnqb3dtq"/>`,
		"fallback": "fa6-solid:file-arrow-up",
	});
}

export default Component;
