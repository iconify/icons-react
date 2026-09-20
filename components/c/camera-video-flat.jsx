import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/asobheb5s.css';
import '../../css/b/b7vu_ftog.css';
import '../../css/p/pp_etefer.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="asobheb5s"/><path class="b7vu_ftog"/><path clip-rule="evenodd" class="pp_etefer"/></g>`,
		"fallback": "streamline-plump-color:camera-video-flat",
	});
}

export default Component;
