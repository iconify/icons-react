import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bj-2ld8si.css';
import '../../css/x/xq5i-hb-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="bj-2ld8si"/><path class="xq5i-hb-b"/></g>`,
		"fallback": "streamline-freehand:color-gradient",
	});
}

export default Component;
