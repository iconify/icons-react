import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwiru2bor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwiru2bor"/>`,
		"fallback": "hugeicons:cursor-01",
	});
}

export default Component;
