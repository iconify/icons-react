import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/q/qpcqvmvcn.css';
import '../../css/w/wjxv5acdy.css';
import '../../css/g/gxmi0ki4a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="qpcqvmvcn"/><path class="wjxv5acdy"/><path clip-rule="evenodd" class="gxmi0ki4a"/></g>`,
		"fallback": "icon-park-outline:group",
	});
}

export default Component;
