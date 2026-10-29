import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lwtp4nbgu.css';
import '../../css/d/d-j-3vbzo.css';
import '../../css/w/wanqtl7hh.css';
import '../../css/k/kn3piikji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="lwtp4nbgu wm-k"/><path class="d-j-3vbzo wm-a"/><path class="wanqtl7hh wm-k"/><path class="kn3piikji wm-a"/></g>`,
		"fallback": "withicons:chart-line-sketch",
	});
}

export default Component;
