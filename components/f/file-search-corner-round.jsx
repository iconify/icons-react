import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfq142g3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfq142g3b"/>`,
		"fallback": "coolicons:file-search-corner-round",
	});
}

export default Component;
