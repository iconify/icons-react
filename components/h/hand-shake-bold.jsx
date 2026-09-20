import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/oriy87bvv.css';
import '../../css/m/mferhmqmp.css';
import '../../css/r/ri6-dxbgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="oriy87bvv"/><path class="mferhmqmp"/><path class="ri6-dxbgs"/></g>`,
		"fallback": "solar:hand-shake-bold",
	});
}

export default Component;
