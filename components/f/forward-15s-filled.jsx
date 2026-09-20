import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zf4ciqb5x.css';
import '../../css/b/buqmtzb6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zf4ciqb5x"/><path class="buqmtzb6e"/></g>`,
		"fallback": "reicon:forward-15s-filled",
	});
}

export default Component;
