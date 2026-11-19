import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ii79gpbho.css';
import '../../css/b/b2iwf9bfe.css';
import '../../css/r/rgq884gjg.css';
import '../../css/x/xc-z5vbmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ii79gpbho"/><path class="b2iwf9bfe"/><path class="rgq884gjg"/><path class="xc-z5vbmo"/></g>`,
		"fallback": "andrsrxn:copyleft-off",
	});
}

export default Component;
