import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezfumgw-x.css';
import '../../css/p/p-xpucc4o.css';
import '../../css/g/gmg8febjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ezfumgw-x"><path class="p-xpucc4o"/><path class="gmg8febjj"/></g>`,
		"fallback": "streamline-sharp-color:3d-rotate-y-axis",
	});
}

export default Component;
