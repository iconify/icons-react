import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ebknqon7l.css';
import '../../css/y/yzae_kb_t.css';
import '../../css/l/lxeg32b0o.css';
import '../../css/r/r8nwtke6c.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/g/g3sj8mbxp.css';
import '../../css/p/pxoue4g9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ebknqon7l"/><path class="yzae_kb_t"/><path class="lxeg32b0o"/><path class="r8nwtke6c"/><g class="mc2zb0bvp"><path class="g3sj8mbxp"/><path class="pxoue4g9a"/></g></g>`,
		"fallback": "solar:binoculars-bold-duotone",
	});
}

export default Component;
