import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/adcwkwbgr.css';
import '../../css/s/s2y4m7i1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="adcwkwbgr"/><path class="s2y4m7i1c"/></g>`,
		"fallback": "reicon:docs2-duotone",
	});
}

export default Component;
