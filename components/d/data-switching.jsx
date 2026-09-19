import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/pv-ktibnd.css';
import '../../css/m/msgncjdxc.css';
import '../../css/b/bhyjiupcc.css';
import '../../css/r/r7sa26b2f.css';
import '../../css/b/be-xblb1x.css';
import '../../css/h/huc6hab1d.css';
import '../../css/j/jhy_5ites.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="pv-ktibnd"/><path class="msgncjdxc"/><path class="bhyjiupcc"/><path class="r7sa26b2f"/><path class="be-xblb1x"/><path class="huc6hab1d"/><path class="jhy_5ites"/></g>`,
		"fallback": "icon-park-solid:data-switching",
	});
}

export default Component;
