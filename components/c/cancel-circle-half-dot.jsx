import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asp2-2t9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="asp2-2t9j"/>`,
		"fallback": "hugeicons:cancel-circle-half-dot",
	});
}

export default Component;
