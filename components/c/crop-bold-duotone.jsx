import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t0fk-7bfk.css';
import '../../css/s/ss6dzqb4x.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/y/ymoj7fw8s.css';
import '../../css/y/yd_hzrbep.css';
import '../../css/c/cumps5j8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t0fk-7bfk"/><path class="ss6dzqb4x"/><g class="mc2zb0bvp"><path class="ymoj7fw8s"/><path class="yd_hzrbep"/><path class="cumps5j8w"/></g></g>`,
		"fallback": "solar:crop-bold-duotone",
	});
}

export default Component;
