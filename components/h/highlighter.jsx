import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vlbrwcclj.css';
import '../../css/d/dbpuoyzpx.css';
import '../../css/s/s_t_wlb2s.css';
import '../../css/s/s9ujirhuv.css';
import '../../css/o/o79l1hbto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="vlbrwcclj wm-shadow"/><path class="dbpuoyzpx"/><path class="s_t_wlb2s"/><path class="s9ujirhuv"/><path class="o79l1hbto"/></g>`,
		"fallback": "withicons-retro:highlighter",
	});
}

export default Component;
