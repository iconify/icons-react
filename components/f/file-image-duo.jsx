import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/c3b96qjhw.css';
import '../../css/w/wb2vbp03d.css';
import '../../css/v/vp3_m3b5w.css';
import '../../css/r/rwwcgq31v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="c3b96qjhw"/><path class="wb2vbp03d wm-a"/><path class="vp3_m3b5w"/><path class="rwwcgq31v wm-a"/></g>`,
		"fallback": "withicons:file-image-duo",
	});
}

export default Component;
