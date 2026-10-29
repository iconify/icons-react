import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zxmf3xbzu.css';
import '../../css/o/oc_p2dhlj.css';
import '../../css/q/q3ad9d2ky.css';
import '../../css/z/ziso84b9n.css';
import '../../css/u/uxoz16zip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="zxmf3xbzu"/><path class="oc_p2dhlj wm-k"/><path class="q3ad9d2ky wm-a"/><path class="wm-k ziso84b9n"/><path class="uxoz16zip wm-a"/></g>`,
		"fallback": "withicons:bath-sketch",
	});
}

export default Component;
