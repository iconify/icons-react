import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/p45bzgb3t.css';
import '../../css/a/ar6hvmq4u.css';
import '../../css/a/a8i0rnq8v.css';
import '../../css/w/wri5opbdz.css';
import '../../css/o/ousw4_gnu.css';
import '../../css/r/rfkkjjfoa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="p45bzgb3t wm-deco"/><path class="ar6hvmq4u wm-deco"/><path class="a8i0rnq8v wm-deco"/><path class="wm-k wri5opbdz"/><path class="ousw4_gnu wm-a"/><path class="rfkkjjfoa wm-a"/></g>`,
		"fallback": "withicons:folder-tree-blueprint",
	});
}

export default Component;
