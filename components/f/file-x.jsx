import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vp3_m3b5w.css';
import '../../css/b/bal-yutsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vp3_m3b5w"/><path class="bal-yutsw wm-a"/></g>`,
		"fallback": "withicons:file-x",
	});
}

export default Component;
