import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ib9yn7bdv.css';
import '../../css/x/xul744bme.css';
import '../../css/y/yawf9negy.css';
import '../../css/b/bnqo1fz8v.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><rect class="ib9yn7bdv"/><rect class="xul744bme"/><rect class="yawf9negy"/><rect class="bnqo1fz8v"/></g>`,
		"fallback": "garden:grid-2x2-fill-12",
	});
}

export default Component;
