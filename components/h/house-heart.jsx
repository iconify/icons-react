import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/n8ntaprac.css';
import '../../css/x/xrl8ybcmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="n8ntaprac"/><path class="xrl8ybcmd"/></g>`,
		"fallback": "hugeicons:house-heart",
	});
}

export default Component;
