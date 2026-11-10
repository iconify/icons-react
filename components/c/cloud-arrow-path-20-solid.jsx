import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4vdj2bja.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j4vdj2bja"/>`,
		"fallback": "sidekickicons:cloud-arrow-path-20-solid",
	});
}

export default Component;
