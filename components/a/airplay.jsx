import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/o8160g47h.css';
import '../../css/s/so_a8ux-a.css';
import '../../css/t/tnd74bbxk.css';
import '../../css/k/k6yqcpy5z.css';
import '../../css/o/oohlmtaqi.css';
import '../../css/d/dev5_mbki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="o8160g47h wm-shadow"/><path class="so_a8ux-a"/><path class="tnd74bbxk"/><path class="k6yqcpy5z"/><path class="oohlmtaqi"/><path class="dev5_mbki"/></g>`,
		"fallback": "withicons-retro:airplay",
	});
}

export default Component;
