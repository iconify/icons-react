import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b45v4c7ra.css';
import '../../css/i/inewx5b5l.css';
import '../../css/i/iu5_1fbyz.css';
import '../../css/m/m5eds2f1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b45v4c7ra"/><circle class="inewx5b5l"/><circle class="iu5_1fbyz"/><circle class="m5eds2f1v"/></g>`,
		"fallback": "humbleicons:chat",
	});
}

export default Component;
