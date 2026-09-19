import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/d/dbedrlbtx.css';
import '../../css/w/wtb09z7cz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="dbedrlbtx"/><path class="wtb09z7cz"/></g>`,
		"fallback": "hugeicons:call-end-04",
	});
}

export default Component;
