import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/j/jtj9ybeul.css';
import '../../css/v/v1s64tbtd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="jtj9ybeul"/><path class="v1s64tbtd"/></g>`,
		"fallback": "icon-park-solid:align-vertically",
	});
}

export default Component;
