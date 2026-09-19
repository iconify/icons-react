import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kboxg5b1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kboxg5b1b"/>`,
		"fallback": "heroicons:at-symbol",
	});
}

export default Component;
