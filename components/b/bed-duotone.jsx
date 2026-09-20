import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zhr7jvb_f.css';
import '../../css/t/ta1rbzbiw.css';
import '../../css/w/wtzqv5bgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zhr7jvb_f"/><path class="ta1rbzbiw"/><path class="wtzqv5bgx"/></g>`,
		"fallback": "reicon:bed-duotone",
	});
}

export default Component;
