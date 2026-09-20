import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o1-oh_ofo.css';
import '../../css/l/lq-otmbid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o1-oh_ofo"/><path class="lq-otmbid"/></g>`,
		"fallback": "reicon:cloud-add-filled",
	});
}

export default Component;
