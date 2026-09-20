import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mk2kad5se.css';
import '../../css/t/tqd73obgx.css';
import '../../css/m/mzb3cwb-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mk2kad5se"/><path class="tqd73obgx"/><path class="mzb3cwb-k"/></g>`,
		"fallback": "tdesign:error-triangle",
	});
}

export default Component;
