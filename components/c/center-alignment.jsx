import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/z/zta2u8b6n.css';
import '../../css/z/z4tkxcc3q.css';
import '../../css/m/meuc3b1yt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="zta2u8b6n"/><path class="z4tkxcc3q"/><path class="meuc3b1yt"/></g>`,
		"fallback": "icon-park:center-alignment",
	});
}

export default Component;
