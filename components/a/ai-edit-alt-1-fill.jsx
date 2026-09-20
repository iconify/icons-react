import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oz1qw1t2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oz1qw1t2u"/>`,
		"fallback": "si:ai-edit-alt-1-fill",
	});
}

export default Component;
