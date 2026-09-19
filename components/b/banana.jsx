import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lhn_jq-6u.css';
import '../../css/j/j376drwrc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lhn_jq-6u"/><path class="j376drwrc"/></g>`,
		"fallback": "hugeicons:banana",
	});
}

export default Component;
