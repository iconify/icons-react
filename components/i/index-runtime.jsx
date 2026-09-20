import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyo412_1k.css';
import '../../css/l/l40lmxbfq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyo412_1k"/><path class="l40lmxbfq"/>`,
		"fallback": "oui:index-runtime",
	});
}

export default Component;
