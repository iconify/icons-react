import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hs1vj9b-w.css';
import '../../css/b/b9uz1p94q.css';
import '../../css/s/sd-hmubzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hs1vj9b-w"/><path class="b9uz1p94q wm-shadow"/><path class="sd-hmubzb"/></g>`,
		"fallback": "withicons:avatar-dino-engrave",
	});
}

export default Component;
