import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s9ogv7bti.css';
import '../../css/x/xvbzxc5iy.css';
import '../../css/s/saxyzhbxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s9ogv7bti"/><path clip-rule="evenodd" class="xvbzxc5iy"/><path clip-rule="evenodd" class="saxyzhbxq"/></g>`,
		"fallback": "healthicons:contraceptive-patch-outline-24px",
	});
}

export default Component;
