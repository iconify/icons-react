import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/e/e2lbwcbuv.css';
import '../../css/s/slfhu6b6x.css';
import '../../css/p/p4_ysrbuy.css';
import '../../css/z/zl0621ubp.css';
import '../../css/q/qrcdo5bat.css';
import '../../css/f/fz2e3jb-m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="e2lbwcbuv"/><path class="slfhu6b6x"/><path class="p4_ysrbuy"/><path class="zl0621ubp"/><path class="qrcdo5bat"/><path class="fz2e3jb-m"/></g>`,
		"fallback": "icon-park-outline:hand-drag",
	});
}

export default Component;
