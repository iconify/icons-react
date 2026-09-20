import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a9xk7ubfw.css';
import '../../css/l/lu4ljlbqq.css';
import '../../css/e/ek-yzyzpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a9xk7ubfw"/><path class="lu4ljlbqq"/><path class="ek-yzyzpo"/></g>`,
		"fallback": "tdesign:folder-details",
	});
}

export default Component;
