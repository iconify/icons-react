import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rax16kjjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rax16kjjc"/>`,
		"fallback": "boxicons:hot-tub-water",
	});
}

export default Component;
