import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yv051_8ga.css';
import '../../css/t/thg8cjb6f.css';
import '../../css/k/ke1zs1m5n.css';
import '../../css/b/bfk3zd2um.css';
import '../../css/v/vigcvrb9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="yv051_8ga"/><path class="thg8cjb6f"/><path class="ke1zs1m5n"/><path class="bfk3zd2um"/><path class="vigcvrb9z"/></g>`,
		"fallback": "solar:gas-station-bold-duotone",
	});
}

export default Component;
