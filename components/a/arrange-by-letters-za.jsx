import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgbsv---w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgbsv---w"/>`,
		"fallback": "hugeicons:arrange-by-letters-za",
	});
}

export default Component;
