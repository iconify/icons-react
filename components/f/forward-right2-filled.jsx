import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bpjbmrd9a.css';
import '../../css/h/hf7xtviug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bpjbmrd9a"/><path clip-rule="evenodd" class="hf7xtviug"/></g>`,
		"fallback": "reicon:forward-right2-filled",
	});
}

export default Component;
