import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tld7go5-j.css';
import '../../css/p/pmv50n_jk.css';
import '../../css/f/fbnjgqhbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tld7go5-j"/><path class="pmv50n_jk"/><path class="fbnjgqhbt"/></g>`,
		"fallback": "pixelarticons:download-sharp",
	});
}

export default Component;
