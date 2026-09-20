import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obo01usqb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obo01usqb"/>`,
		"fallback": "sidekickicons:badge-16-solid",
	});
}

export default Component;
