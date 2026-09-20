import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m5hp-pbca.css';
import '../../css/c/coe3yvb-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m5hp-pbca"/><path class="coe3yvb-f"/></g>`,
		"fallback": "reicon:backward-15-seconds-filled",
	});
}

export default Component;
