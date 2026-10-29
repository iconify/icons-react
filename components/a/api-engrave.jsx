import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/ko7dz5wwb.css';
import '../../css/l/l102dbhsr.css';
import '../../css/b/bykglcbce.css';
import '../../css/v/v86i0g9gf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ko7dz5wwb wm-k"/><path class="l102dbhsr wm-shadow"/><path class="bykglcbce wm-k"/><path class="v86i0g9gf wm-a"/></g>`,
		"fallback": "withicons:api-engrave",
	});
}

export default Component;
