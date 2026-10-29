import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uq9xj6cez.css';
import '../../css/d/dlpg85fto.css';
import '../../css/h/hb98s3yxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="uq9xj6cez"/><path class="dlpg85fto wm-shadow"/><path class="hb98s3yxz"/></g>`,
		"fallback": "withicons:chevron-up-engrave",
	});
}

export default Component;
