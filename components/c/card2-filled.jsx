import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b4yvx5bqg.css';
import '../../css/q/qwt0l5e7j.css';
import '../../css/s/s-k-uwbvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b4yvx5bqg"/><path clip-rule="evenodd" class="qwt0l5e7j"/><path class="s-k-uwbvx"/></g>`,
		"fallback": "reicon:card2-filled",
	});
}

export default Component;
