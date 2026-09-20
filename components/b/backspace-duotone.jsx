import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/os0r_vbxw.css';
import '../../css/q/qvl7p5c4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="os0r_vbxw"/><path class="qvl7p5c4g"/></g>`,
		"fallback": "reicon:backspace-duotone",
	});
}

export default Component;
