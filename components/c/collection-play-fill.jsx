import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ne0xqbbgd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ne0xqbbgd"/>`,
		"fallback": "bi:collection-play-fill",
	});
}

export default Component;
