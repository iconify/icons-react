import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vayrid8hl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vayrid8hl"/>`,
		"fallback": "ri:inbox-line",
	});
}

export default Component;
