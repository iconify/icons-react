import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uq128jbon.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uq128jbon"/>`,
		"fallback": "zondicons:cloud-upload",
	});
}

export default Component;
