import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/q/q87tv1u_r.css';
import '../../css/b/bom312b6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="q87tv1u_r"/><path class="bom312b6z"/></g>`,
		"fallback": "tdesign:ai-terminal-1",
	});
}

export default Component;
