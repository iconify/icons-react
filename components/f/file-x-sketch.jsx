import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/ztptv0bde.css';
import '../../css/a/aczwgrt9b.css';
import '../../css/b/b0tfb6skh.css';
import '../../css/t/tc5tthbjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ztptv0bde"/><path class="aczwgrt9b wm-a"/><path class="b0tfb6skh wm-k"/><path class="tc5tthbjf wm-a"/></g>`,
		"fallback": "withicons:file-x-sketch",
	});
}

export default Component;
