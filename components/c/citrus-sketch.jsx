import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nzo06bbex.css';
import '../../css/t/t1wbj0d5e.css';
import '../../css/i/icn4j_bqy.css';
import '../../css/a/avgg4ibne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="nzo06bbex wm-k"/><path class="t1wbj0d5e wm-a"/><path class="icn4j_bqy wm-k"/><path class="avgg4ibne wm-a"/></g>`,
		"fallback": "withicons:citrus-sketch",
	});
}

export default Component;
