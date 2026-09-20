import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1lyiqb6p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1lyiqb6p"/>`,
		"fallback": "streamline:bag-suitcase-1",
	});
}

export default Component;
