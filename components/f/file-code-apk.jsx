import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uhvqt2gjn.css';
import '../../css/h/hnjb5cc-x.css';
import '../../css/q/qc5p_m7be.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="uhvqt2gjn"/><path class="hnjb5cc-x"/><path class="qc5p_m7be"/></g>`,
		"fallback": "streamline-freehand:file-code-apk",
	});
}

export default Component;
