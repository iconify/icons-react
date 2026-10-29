import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/ti149fj5l.css';
import '../../css/x/xnqlj98sb.css';
import '../../css/r/rftpgmx8c.css';
import '../../css/l/lktwn-bjm.css';
import '../../css/i/ik22gveqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ti149fj5l wm-k"/><path class="wm-a xnqlj98sb"/><path class="rftpgmx8c wm-shadow"/><path class="lktwn-bjm wm-k"/><path class="ik22gveqy wm-a"/></g>`,
		"fallback": "withicons:file-output-engrave",
	});
}

export default Component;
