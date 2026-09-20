import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yz6c3ccrp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yz6c3ccrp"/>`,
		"fallback": "qlementine-icons:chevron-down-16",
	});
}

export default Component;
