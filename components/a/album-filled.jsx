import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xpfqosbkf.css';
import '../../css/s/sjk0srbgx.css';
import '../../css/r/r76zk_bwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xpfqosbkf"/><path clip-rule="evenodd" class="sjk0srbgx"/><path class="r76zk_bwh"/></g>`,
		"fallback": "reicon:album-filled",
	});
}

export default Component;
