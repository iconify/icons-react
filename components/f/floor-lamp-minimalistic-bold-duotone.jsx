import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a3gl9p8ej.css';
import '../../css/v/vcl2ijsxt.css';
import '../../css/r/rxcr_ybmb.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/m/mk217n9vj.css';
import '../../css/i/ib39c0hwz.css';
import '../../css/r/r_gzon7qt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a3gl9p8ej"/><path class="vcl2ijsxt"/><path class="rxcr_ybmb"/><g class="mc2zb0bvp"><path class="mk217n9vj"/><path class="ib39c0hwz"/><path class="r_gzon7qt"/></g></g>`,
		"fallback": "solar:floor-lamp-minimalistic-bold-duotone",
	});
}

export default Component;
