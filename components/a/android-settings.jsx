import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/j7__fxb2p.css';
import '../../css/m/m88tpc5vd.css';
import '../../css/y/yie9lh1_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="j7__fxb2p"/><path class="m88tpc5vd"/><path class="yie9lh1_l"/></g>`,
		"fallback": "streamline-freehand:android-settings",
	});
}

export default Component;
