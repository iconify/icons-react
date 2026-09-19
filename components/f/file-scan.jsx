import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xqs8i6-cp.css';
import '../../css/i/i_q8n1bbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xqs8i6-cp"/><path class="i_q8n1bbz"/></g>`,
		"fallback": "hugeicons:file-scan",
	});
}

export default Component;
