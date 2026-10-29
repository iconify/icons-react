import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xik7p6btk.css';
import '../../css/c/co9hdudcl.css';
import '../../css/e/e7ssibbmt.css';
import '../../css/u/uh01hzbyb.css';
import '../../css/a/abeza2b1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k xik7p6btk"/><path class="co9hdudcl wm-a"/><path class="e7ssibbmt wm-shadow"/><path class="uh01hzbyb wm-k"/><path class="abeza2b1z wm-a"/></g>`,
		"fallback": "withicons:heart-crack-engrave",
	});
}

export default Component;
