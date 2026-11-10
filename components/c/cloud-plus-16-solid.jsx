import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/huzhlqb_z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="huzhlqb_z"/>`,
		"fallback": "sidekickicons:cloud-plus-16-solid",
	});
}

export default Component;
