import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le1mi88em.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="le1mi88em"/>`,
		"fallback": "boxicons:grid-circle-diagonal-right",
	});
}

export default Component;
