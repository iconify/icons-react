import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mecs8xbyp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mecs8xbyp"/>`,
		"fallback": "heroicons:chevron-double-up-16-solid",
	});
}

export default Component;
