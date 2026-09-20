import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/r/rbwutfb1t.css';
import '../../css/g/gl8m_f1lw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="rbwutfb1t"/><path class="gl8m_f1lw"/></g>`,
		"fallback": "keyline-icons:humidity-sharp-fill",
	});
}

export default Component;
