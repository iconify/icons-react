import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ugtn2gb9g.css';
import '../../css/i/i3289rbus.css';
import '../../css/l/lsbtr9k-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ugtn2gb9g"/><path clip-rule="evenodd" class="i3289rbus"/><path class="lsbtr9k-u"/></g>`,
		"fallback": "solar:gallery-wide-bold-duotone",
	});
}

export default Component;
