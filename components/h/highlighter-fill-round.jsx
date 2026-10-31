import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rv0ponhul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rv0ponhul"/>`,
		"fallback": "coolicons:highlighter-fill-round",
	});
}

export default Component;
