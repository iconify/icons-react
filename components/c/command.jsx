import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/l/l94_8gbje.css';
import '../../css/w/wuekglbtb.css';
import '../../css/a/anfj_ubfx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="l94_8gbje"/><path class="wuekglbtb"/><path class="anfj_ubfx"/></g>`,
		"fallback": "icon-park-solid:command",
	});
}

export default Component;
