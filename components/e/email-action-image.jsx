import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nk_pydb1h.css';
import '../../css/p/p5x3s9blb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="nk_pydb1h"/><path class="p5x3s9blb"/></g>`,
		"fallback": "streamline-freehand:email-action-image",
	});
}

export default Component;
