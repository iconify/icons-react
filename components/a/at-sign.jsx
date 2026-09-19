import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/q/qfgadhy5f.css';
import '../../css/e/e01zjjbhs.css';
import '../../css/j/jwu77k_om.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="qfgadhy5f"/><path class="e01zjjbhs"/><path class="jwu77k_om"/></g>`,
		"fallback": "icon-park-solid:at-sign",
	});
}

export default Component;
