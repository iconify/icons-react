import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/z/zvkp0cb3v.css';
import '../../css/e/eepjdcbae.css';
import '../../css/r/rz0qkz6ao.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="zvkp0cb3v"/><rect class="eepjdcbae"/><path class="rz0qkz6ao"/></g>`,
		"fallback": "icon-park-outline:camera",
	});
}

export default Component;
