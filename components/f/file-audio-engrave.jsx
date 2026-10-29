import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/x_lepub5y.css';
import '../../css/g/gwmckxxys.css';
import '../../css/o/olh21jifq.css';
import '../../css/v/vp3_m3b5w.css';
import '../../css/z/z4bbp2bhq.css';
import '../../css/v/vvm_zisqm.css';
import '../../css/k/kz-j5bbtl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k x_lepub5y"/><path class="gwmckxxys wm-a"/><path class="olh21jifq wm-shadow"/><path class="vp3_m3b5w wm-k"/><path class="wm-a z4bbp2bhq"/><path class="vvm_zisqm wm-a"/><path class="kz-j5bbtl wm-a"/></g>`,
		"fallback": "withicons:file-audio-engrave",
	});
}

export default Component;
