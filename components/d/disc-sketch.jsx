import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hj8fw8upx.css';
import '../../css/g/gv77zhbby.css';
import '../../css/f/fa4lrsbuw.css';
import '../../css/m/mdra5qi3b.css';
import '../../css/i/iztv2lhgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hj8fw8upx"/><path class="gv77zhbby wm-k"/><path class="fa4lrsbuw wm-k"/><path class="mdra5qi3b wm-a"/><circle class="iztv2lhgg wm-a"/></g>`,
		"fallback": "withicons:disc-sketch",
	});
}

export default Component;
