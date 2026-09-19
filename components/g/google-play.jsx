import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xpkdm-92d.css';
import '../../css/j/j436h-u7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xpkdm-92d"/><path class="j436h-u7k"/></g>`,
		"fallback": "grommet-icons:google-play",
	});
}

export default Component;
