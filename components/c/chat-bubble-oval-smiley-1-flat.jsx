import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oq85fm3yy.css';
import '../../css/y/yvdfwwb_k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oq85fm3yy"/><path clip-rule="evenodd" class="yvdfwwb_k"/></g>`,
		"fallback": "streamline-plump-color:chat-bubble-oval-smiley-1-flat",
	});
}

export default Component;
