import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sgj-cgbmc.css';
import '../../css/z/zpn9p-biz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="sgj-cgbmc"/><path class="zpn9p-biz"/></g>`,
		"fallback": "griddy-icons:blood-drop-minus",
	});
}

export default Component;
