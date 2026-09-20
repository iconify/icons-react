import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bni1e42rr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bni1e42rr"/>`,
		"fallback": "tabler:ai-agents",
	});
}

export default Component;
