import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yolsd6bcj.css';
import '../../css/i/ir84fxbty.css';
import '../../css/v/vzf5asbos.css';
import '../../css/k/ks79mxcop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yolsd6bcj"/><path class="ir84fxbty"/><path class="vzf5asbos"/><path class="ks79mxcop"/></g>`,
		"fallback": "streamline-freehand-color:business-management-teamwork-clap",
	});
}

export default Component;
