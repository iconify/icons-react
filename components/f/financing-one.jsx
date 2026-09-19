import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/w/w38ullbcm.css';
import '../../css/c/cjfecbceb.css';
import '../../css/s/szmwbtbmw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="w38ullbcm"/><path class="cjfecbceb"/><path clip-rule="evenodd" class="szmwbtbmw"/></g>`,
		"fallback": "icon-park-outline:financing-one",
	});
}

export default Component;
