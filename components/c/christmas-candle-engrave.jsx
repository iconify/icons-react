import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pqbe3sw2q.css';
import '../../css/l/litn8rban.css';
import '../../css/z/z5ue-mb9z.css';
import '../../css/u/uxaf0_brb.css';
import '../../css/y/yu9sii_3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="pqbe3sw2q"/><path class="litn8rban wm-shadow"/><path class="z5ue-mb9z"/><path class="uxaf0_brb"/><path class="yu9sii_3x"/></g>`,
		"fallback": "withicons:christmas-candle-engrave",
	});
}

export default Component;
