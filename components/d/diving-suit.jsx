import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5cg8fb9r.css';
import '../../css/f/fe_6t6d0u.css';
import '../../css/y/y4mbm7bnq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y5cg8fb9r"><path class="fe_6t6d0u"/><path class="y4mbm7bnq"/></g>`,
		"fallback": "icon-park-outline:diving-suit",
	});
}

export default Component;
