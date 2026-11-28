import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/s83kgfzux.css';
import '../../css/r/rs268gy_r.css';
import '../../css/c/c37jtuazh.css';
import '../../css/s/srmh2hd4p.css';
import '../../css/d/dvf5_jn6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="s83kgfzux"/><path class="rs268gy_r"/><path class="c37jtuazh"/><path class="srmh2hd4p"/><path class="dvf5_jn6c"/></g>`,
		"fallback": "iconaut:circle-dashed-sparkles",
	});
}

export default Component;
