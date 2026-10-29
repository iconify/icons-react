import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/p8ue_zwas.css';
import '../../css/d/d4rt0lb-l.css';
import '../../css/z/zc2m5bbql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="p8ue_zwas"/><path class="d4rt0lb-l wm-a"/><path class="zc2m5bbql"/></g>`,
		"fallback": "withicons:crosshair-duo",
	});
}

export default Component;
