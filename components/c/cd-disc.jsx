import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x9_ahjb7j.css';
import '../../css/y/y7b58vpdl.css';
import '../../css/d/dvu_-ub0c.css';
import '../../css/b/b8xca3bfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="x9_ahjb7j"/><path class="y7b58vpdl"/><path class="dvu_-ub0c"/><path class="b8xca3bfo"/></g>`,
		"fallback": "streamline-freehand:cd-disc",
	});
}

export default Component;
