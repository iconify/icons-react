import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fobx77b2f.css';
import '../../css/w/waa2dlbiu.css';
import '../../css/n/n21a0m78c.css';
import '../../css/n/nukv87bac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fobx77b2f"/><path class="waa2dlbiu"/><path class="n21a0m78c"/><path class="nukv87bac"/></g>`,
		"fallback": "andrsrxn:hard-drive-out",
	});
}

export default Component;
