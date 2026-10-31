import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bfg1rzbjq.css';
import '../../css/l/lhgu-bogr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="bfg1rzbjq wm-k"/><path class="lhgu-bogr wm-s"/></g>`,
		"fallback": "withicons:clock-alert-gloss",
	});
}

export default Component;
