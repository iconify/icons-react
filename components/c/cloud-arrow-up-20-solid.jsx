import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl5xlyp8v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yl5xlyp8v"/>`,
		"fallback": "heroicons:cloud-arrow-up-20-solid",
	});
}

export default Component;
