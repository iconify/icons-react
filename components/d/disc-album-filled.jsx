import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rb8x9-sxr.css';
import '../../css/c/ch3jrebwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rb8x9-sxr"/><path class="ch3jrebwf"/></g>`,
		"fallback": "lucide-extended:disc-album-filled",
	});
}

export default Component;
