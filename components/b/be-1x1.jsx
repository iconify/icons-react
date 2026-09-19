import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9qcacyl.css';
import '../../css/e/e3m7h668b.css';
import '../../css/s/swpuiqbsh.css';
import '../../css/y/yun868b6i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv9qcacyl"><path class="e3m7h668b"/><path class="swpuiqbsh"/><path class="yun868b6i"/></g>`,
		"fallback": "flag:be-1x1",
	});
}

export default Component;
