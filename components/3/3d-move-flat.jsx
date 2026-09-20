import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/ys13e4gqv.css';
import '../../css/s/s_idu-mxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ys13e4gqv"/><path class="s_idu-mxo"/></g>`,
		"fallback": "streamline-sharp-color:3d-move-flat",
	});
}

export default Component;
