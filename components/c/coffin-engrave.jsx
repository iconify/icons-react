import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qy7_hlb2q.css';
import '../../css/o/owkq-n1ue.css';
import '../../css/i/ipva-ybxm.css';
import '../../css/t/t2zlwccha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="qy7_hlb2q wm-k"/><path class="owkq-n1ue wm-shadow"/><path class="ipva-ybxm wm-k"/><path class="t2zlwccha wm-a"/></g>`,
		"fallback": "withicons:coffin-engrave",
	});
}

export default Component;
