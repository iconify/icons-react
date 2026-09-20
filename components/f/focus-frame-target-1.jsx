import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mbhurnb1w.css';
import '../../css/o/o81ppebtg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mbhurnb1w"/><path class="o81ppebtg"/></g>`,
		"fallback": "streamline-freehand:focus-frame-target-1",
	});
}

export default Component;
