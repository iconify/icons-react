import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cme5uzbss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cme5uzbss"/>`,
		"fallback": "hugeicons:ai-search-lines",
	});
}

export default Component;
