import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vh9g7lyzs.css';
import '../../css/g/gl0zcbu9a.css';
import '../../css/o/o_s1awb0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vh9g7lyzs"/><path class="gl0zcbu9a"/><path class="o_s1awb0s"/></g>`,
		"fallback": "reicon:inbox-out-duotone",
	});
}

export default Component;
