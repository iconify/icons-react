import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qq8-v2bpa.css';
import '../../css/a/aq4yjxbak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qq8-v2bpa"/><path clip-rule="evenodd" class="aq4yjxbak"/></g>`,
		"fallback": "reicon:folder-open-filled",
	});
}

export default Component;
