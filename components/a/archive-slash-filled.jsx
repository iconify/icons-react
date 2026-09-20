import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mkay02bnk.css';
import '../../css/q/qwkhbpboq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mkay02bnk"/><path class="qwkhbpboq"/></g>`,
		"fallback": "reicon:archive-slash-filled",
	});
}

export default Component;
