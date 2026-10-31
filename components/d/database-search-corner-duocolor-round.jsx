import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fzwh2xuoy.css';
import '../../css/m/m9t7rsb7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fzwh2xuoy"/><path class="m9t7rsb7s"/></g>`,
		"fallback": "coolicons:database-search-corner-duocolor-round",
	});
}

export default Component;
