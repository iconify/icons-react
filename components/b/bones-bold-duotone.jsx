import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wf89k6buf.css';
import '../../css/l/ljzkw2psh.css';
import '../../css/i/iwq0mw-3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wf89k6buf"/><path class="ljzkw2psh"/><path class="iwq0mw-3z"/></g>`,
		"fallback": "solar:bones-bold-duotone",
	});
}

export default Component;
