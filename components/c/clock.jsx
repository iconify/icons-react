import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlr7fx0nx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wlr7fx0nx"/>`,
		"fallback": "majesticons:clock",
	});
}

export default Component;
