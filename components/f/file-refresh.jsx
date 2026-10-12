import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t08m_r21d.css';
import '../../css/u/un4utc-kb.css';
import '../../css/w/wlhhfxh0x.css';
import '../../css/c/crtg3b41z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t08m_r21d"/><path class="un4utc-kb"/><path class="wlhhfxh0x"/><path class="crtg3b41z"/></g>`,
		"fallback": "andrsrxn:file-refresh",
	});
}

export default Component;
