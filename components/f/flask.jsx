import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/q/qnevwugzd.css';
import '../../css/v/vhhxkzb1a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="qnevwugzd"/><path class="vhhxkzb1a"/></g>`,
		"fallback": "icon-park-solid:flask",
	});
}

export default Component;
