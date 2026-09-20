import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b2g7hnbdp.css';
import '../../css/o/oxgjk-6ts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b2g7hnbdp"/><path class="oxgjk-6ts"/></g>`,
		"fallback": "reicon:aquarius-filled",
	});
}

export default Component;
