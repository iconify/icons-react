import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ogusr7bct.css';
import '../../css/y/yqld-il0i.css';
import '../../css/x/x7i_i-bui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ogusr7bct"/><path class="yqld-il0i"/><path class="x7i_i-bui"/></g>`,
		"fallback": "andrsrxn:crane-tower",
	});
}

export default Component;
