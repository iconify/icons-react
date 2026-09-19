import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/b9l1wh84x.css';
import '../../css/y/yilc4enth.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="b9l1wh84x"/><path class="yilc4enth"/></g>`,
		"fallback": "healthicons:death-alt22x-outline",
	});
}

export default Component;
