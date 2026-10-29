import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/slaq_1zap.css';
import '../../css/q/qnehnjw6c.css';
import '../../css/f/fk3w5gqik.css';
import '../../css/s/spbohtbnc.css';
import '../../css/r/r84p9ezvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="slaq_1zap wm-k"/><path class="qnehnjw6c wm-a"/><path class="fk3w5gqik wm-shadow"/><path class="spbohtbnc wm-k"/><path class="r84p9ezvo wm-a"/></g>`,
		"fallback": "withicons:backpack-engrave",
	});
}

export default Component;
