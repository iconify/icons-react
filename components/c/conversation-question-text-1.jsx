import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bgz7rbcsz.css';
import '../../css/j/je2u2nbqc.css';
import '../../css/v/vszm1mb8f.css';
import '../../css/a/ad7lbex3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bgz7rbcsz"/><path class="je2u2nbqc"/><path class="vszm1mb8f"/><path class="ad7lbex3e"/></g>`,
		"fallback": "streamline-freehand-color:conversation-question-text-1",
	});
}

export default Component;
