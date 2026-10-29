import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vn64pd1yg.css';
import '../../css/w/whghrwqec.css';
import '../../css/s/shx_j6b-f.css';
import '../../css/g/gkoajyd-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vn64pd1yg wm-k"/><path class="whghrwqec wm-a"/><path class="shx_j6b-f wm-k"/><path class="gkoajyd-t wm-a"/></g>`,
		"fallback": "withicons:avatar-person-headphones-sketch",
	});
}

export default Component;
