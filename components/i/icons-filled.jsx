import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xfln8ib2k.css';
import '../../css/a/agjmw858w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xfln8ib2k"/><path class="agjmw858w"/></g>`,
		"fallback": "tabler:icons-filled",
	});
}

export default Component;
