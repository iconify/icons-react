import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/t7wgm3bcf.css';
import '../../css/d/duwkm8_od.css';
import '../../css/r/re13p-ksd.css';
import '../../css/e/eyw-z6bdb.css';
import '../../css/b/by-5tbcoa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="t7wgm3bcf"/><path class="duwkm8_od wm-k"/><path class="re13p-ksd wm-a"/><path class="eyw-z6bdb wm-k"/><path class="by-5tbcoa wm-a"/></g>`,
		"fallback": "withicons:bookmark-plus-sketch",
	});
}

export default Component;
