import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l120o-bnn.css';
import '../../css/z/zi0xacbsp.css';
import '../../css/k/kxfvssb0y.css';
import '../../css/d/dsv-bdbie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l120o-bnn"/><path class="zi0xacbsp"/><path class="kxfvssb0y"/><path class="dsv-bdbie"/></g>`,
		"fallback": "solar:chat-round-dots-bold-duotone",
	});
}

export default Component;
