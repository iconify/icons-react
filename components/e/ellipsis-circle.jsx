import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai0oe79so.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ai0oe79so"/>`,
		"fallback": "gridicons:ellipsis-circle",
	});
}

export default Component;
