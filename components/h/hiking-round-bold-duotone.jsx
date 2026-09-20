import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hlil8_b4l.css';
import '../../css/e/ews0u17zd.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/r/r3qvqygmn.css';
import '../../css/z/zt-41go0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hlil8_b4l"/><path clip-rule="evenodd" class="ews0u17zd"/><g class="mc2zb0bvp"><path class="r3qvqygmn"/><path class="zt-41go0y"/></g></g>`,
		"fallback": "solar:hiking-round-bold-duotone",
	});
}

export default Component;
