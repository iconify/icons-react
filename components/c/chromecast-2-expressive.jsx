import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t6wergbzn.css';
import '../../css/q/q9u3ezbxo.css';
import '../../css/j/jbbepsbec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t6wergbzn"/><path class="q9u3ezbxo"/><path class="jbbepsbec"/></g>`,
		"fallback": "nrk:chromecast-2-expressive",
	});
}

export default Component;
