import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t99lsxbww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t99lsxbww"/>`,
		"fallback": "hugeicons:arrow-up-01",
	});
}

export default Component;
