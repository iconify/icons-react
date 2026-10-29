import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xddux4bha.css';
import '../../css/z/zgdn5--dp.css';
import '../../css/i/ii4v6lf-c.css';
import '../../css/v/v9wyovbbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="xddux4bha"/><path class="wm-a zgdn5--dp"/><path class="ii4v6lf-c wm-k"/><path class="v9wyovbbf wm-a"/></g>`,
		"fallback": "withicons:archive-sketch",
	});
}

export default Component;
