import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wf89k6buf.css';
import '../../css/x/xdv7f5b5g.css';
import '../../css/o/o728gub3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wf89k6buf"/><path class="xdv7f5b5g"/><path class="o728gub3n"/></g>`,
		"fallback": "solar:graph-new-bold-duotone",
	});
}

export default Component;
