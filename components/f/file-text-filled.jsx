import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qcg-mcczu.css';
import '../../css/m/mpb908bcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qcg-mcczu"/><path class="mpb908bcg"/></g>`,
		"fallback": "reicon:file-text-filled",
	});
}

export default Component;
