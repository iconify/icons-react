import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/eprc4gk8o.css';
import '../../css/n/nymedsb4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="eprc4gk8o"/><path class="nymedsb4n"/></g>`,
		"fallback": "streamline-freehand:color-brush-1",
	});
}

export default Component;
