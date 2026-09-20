import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nwv_my8hs.css';
import '../../css/m/mw6e8javt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="nwv_my8hs"/><path class="mw6e8javt"/></g>`,
		"fallback": "streamline-freehand:color-picker-drop",
	});
}

export default Component;
