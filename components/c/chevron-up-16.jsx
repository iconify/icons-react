import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grn6zs_cm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="grn6zs_cm"/>`,
		"fallback": "qlementine-icons:chevron-up-16",
	});
}

export default Component;
