import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/layxr5bdf.css';
import '../../css/i/i8ycrbbjm.css';
import '../../css/h/hvk1vzbat.css';
import '../../css/c/cw36_6mco.css';
import '../../css/o/orw_fqitx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="layxr5bdf wm-k"/><path class="i8ycrbbjm wm-a"/><path class="hvk1vzbat wm-shadow"/><path class="cw36_6mco wm-a"/><path class="orw_fqitx wm-k"/></g>`,
		"fallback": "withicons:chart-network-engrave",
	});
}

export default Component;
