import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/oclc3gb7j.css';
import '../../css/s/sszgrv-1p.css';
import '../../css/c/ciiof18fy.css';
import '../../css/e/egfkty-mb.css';
import '../../css/p/p61yw8uba.css';
import '../../css/g/g_x203bjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="oclc3gb7j"/><path class="sszgrv-1p"/><path class="ciiof18fy"/><path class="egfkty-mb wm-a"/><path class="p61yw8uba"/><path class="g_x203bjf"/></g>`,
		"fallback": "withicons:avatar-koala-duo",
	});
}

export default Component;
