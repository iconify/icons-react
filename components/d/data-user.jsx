import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/pv-ktibnd.css';
import '../../css/m/msgncjdxc.css';
import '../../css/b/bhyjiupcc.css';
import '../../css/j/jhy_5ites.css';
import '../../css/h/hln1iccyk.css';
import '../../css/s/seckjtz4m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="pv-ktibnd"/><path class="msgncjdxc"/><path class="bhyjiupcc"/><path class="jhy_5ites"/><circle class="hln1iccyk"/><path class="seckjtz4m"/></g>`,
		"fallback": "icon-park-solid:data-user",
	});
}

export default Component;
