import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/p/p83hcbb5i.css';
import '../../css/b/bdhwjlbuv.css';
import '../../css/c/cdux-b05b.css';
import '../../css/o/oemdzc2_z.css';
import '../../css/k/kvdr5wc5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="p83hcbb5i"/><path class="bdhwjlbuv"/><path class="cdux-b05b"/><path class="oemdzc2_z"/><path class="kvdr5wc5m"/></g>`,
		"fallback": "matita:dimension",
	});
}

export default Component;
