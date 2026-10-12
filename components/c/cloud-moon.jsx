import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xsd6vbhqo.css';
import '../../css/m/mnt8w2b3i.css';
import '../../css/b/bfx4sfbis.css';
import '../../css/c/cm2cxzddq.css';
import '../../css/o/o2nzstbtc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xsd6vbhqo"/><path class="mnt8w2b3i"/><path class="bfx4sfbis"/><path class="cm2cxzddq"/><path class="o2nzstbtc"/></g>`,
		"fallback": "andrsrxn:cloud-moon",
	});
}

export default Component;
