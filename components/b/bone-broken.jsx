import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n97-l2bar.css';
import '../../css/b/b94xtzblu.css';
import '../../css/b/b7iizbs3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="n97-l2bar"/><path class="b94xtzblu"/><path clip-rule="evenodd" class="b7iizbs3o"/></g>`,
		"fallback": "reicon:bone-broken",
	});
}

export default Component;
