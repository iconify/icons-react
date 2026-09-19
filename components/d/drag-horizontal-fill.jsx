import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_em2ibwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x_em2ibwv"/>`,
		"fallback": "akar-icons:drag-horizontal-fill",
	});
}

export default Component;
