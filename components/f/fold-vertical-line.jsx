import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fku2rgopk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fku2rgopk"/>`,
		"fallback": "mingcute:fold-vertical-line",
	});
}

export default Component;
