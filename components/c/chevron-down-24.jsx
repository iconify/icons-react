import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slnzngbit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="slnzngbit"/>`,
		"fallback": "qlementine-icons:chevron-down-24",
	});
}

export default Component;
