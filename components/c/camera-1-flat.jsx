import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/ombox1bmp.css';
import '../../css/i/io90tpb-y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ombox1bmp"/><path class="io90tpb-y"/></g>`,
		"fallback": "streamline-plump-color:camera-1-flat",
	});
}

export default Component;
