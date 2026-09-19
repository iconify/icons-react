import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/b/bd-d2t_ig.css';
import '../../css/r/rieztmb7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="bd-d2t_ig"/><path class="rieztmb7w"/></g>`,
		"fallback": "humbleicons:camera-video",
	});
}

export default Component;
