import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c5-lbw2pp.css';
import '../../css/h/hk-49hb0i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c5-lbw2pp"/><path class="hk-49hb0i"/></g>`,
		"fallback": "bi:file-code",
	});
}

export default Component;
