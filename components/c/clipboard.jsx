import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egdozlb8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egdozlb8i"/>`,
		"fallback": "pixelarticons:clipboard",
	});
}

export default Component;
