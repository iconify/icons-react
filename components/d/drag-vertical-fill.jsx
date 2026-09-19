import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4w-4_rrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v4w-4_rrr"/>`,
		"fallback": "akar-icons:drag-vertical-fill",
	});
}

export default Component;
