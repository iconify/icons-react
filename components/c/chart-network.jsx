import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/q/qp38dxbcy.css';
import '../../css/o/orw_fqitx.css';
import '../../css/c/cw36_6mco.css';
import '../../css/f/ffjmppbay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="qp38dxbcy"/><path class="orw_fqitx wm-k"/><path class="cw36_6mco wm-a"/><path class="ffjmppbay wm-deco"/></g>`,
		"fallback": "withicons-kawaii:chart-network",
	});
}

export default Component;
