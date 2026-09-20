import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d85nfxcke.css';
import '../../css/i/ijtrgg6nr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d85nfxcke"/><path clip-rule="evenodd" class="ijtrgg6nr"/></g>`,
		"fallback": "reicon:arrows-up-duotone",
	});
}

export default Component;
