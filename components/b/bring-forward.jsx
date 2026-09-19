import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/c/ca95n_bji.css';
import '../../css/q/qemtg7_xl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="ca95n_bji"/><path class="qemtg7_xl"/></g>`,
		"fallback": "icon-park-solid:bring-forward",
	});
}

export default Component;
