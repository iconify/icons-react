import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kucpko94k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kucpko94k"/>`,
		"fallback": "streamline-block:arrowheads-up-chevron-circle",
	});
}

export default Component;
