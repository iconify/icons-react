import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sgsol42ey.css';
import '../../css/f/f202qswyl.css';
import '../../css/g/g362mc32e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sgsol42ey"/><path clip-rule="evenodd" class="f202qswyl"/><path class="g362mc32e"/></g>`,
		"fallback": "healthicons:baby-male-0203m-alt",
	});
}

export default Component;
