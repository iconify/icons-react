import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sq1y8ubsb.css';
import '../../css/w/we-n9xbbi.css';
import '../../css/q/qc5p_m7be.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="sq1y8ubsb"/><path class="we-n9xbbi"/><path class="qc5p_m7be"/></g>`,
		"fallback": "streamline-freehand:file-code-html",
	});
}

export default Component;
