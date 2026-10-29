import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/id3l-eb5x.css';
import '../../css/r/rb1hythup.css';
import '../../css/s/sumqrmj4j.css';
import '../../css/b/bsj_9-otn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="id3l-eb5x"/><path class="rb1hythup wm-a"/><path class="sumqrmj4j wm-k"/><path class="bsj_9-otn wm-a"/></g>`,
		"fallback": "withicons:hard-drive-sketch",
	});
}

export default Component;
