import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n476wmh3g.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/j/jqn9_xd9g.css';
import '../../css/l/lrmsywbjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n476wmh3g"/><g class="xtpeb-edw"><path class="jqn9_xd9g"/><path class="lrmsywbjb"/></g>`,
		"fallback": "solar:dropper-3-bold-duotone",
	});
}

export default Component;
