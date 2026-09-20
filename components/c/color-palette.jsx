import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zrg4wdisz.css';
import '../../css/m/mtomw1l9y.css';
import '../../css/n/nsz9pcbni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zrg4wdisz"/><path class="mtomw1l9y"/><path class="nsz9pcbni"/></g>`,
		"fallback": "streamline-freehand-color:color-palette",
	});
}

export default Component;
