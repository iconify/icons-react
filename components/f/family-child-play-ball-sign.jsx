import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m_357ilrk.css';
import '../../css/d/duh5fmbqe.css';
import '../../css/z/zz8u2juyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="m_357ilrk"/><path class="duh5fmbqe"/><path class="zz8u2juyk"/></g>`,
		"fallback": "streamline-freehand:family-child-play-ball-sign",
	});
}

export default Component;
