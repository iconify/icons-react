import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wf89k6buf.css';
import '../../css/n/n9vomcc2d.css';
import '../../css/n/nxbinb9me.css';
import '../../css/a/a4aenc4un.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wf89k6buf"/><path class="n9vomcc2d"/><path class="nxbinb9me"/><path class="a4aenc4un"/></g>`,
		"fallback": "solar:inbox-line-bold-duotone",
	});
}

export default Component;
