import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oy_urjqhv.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/l/lkzock2wt.css';
import '../../css/p/p4n3pmbrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oy_urjqhv"/><g class="xtpeb-edw"><path class="lkzock2wt"/><path class="p4n3pmbrj"/></g>`,
		"fallback": "solar:adhesive-plaster-bold-duotone",
	});
}

export default Component;
