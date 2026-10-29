import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/l5u91vwjl.css';
import '../../css/b/bkfrv9bzn.css';
import '../../css/z/z7iiffx2i.css';
import '../../css/j/jia-glb4z.css';
import '../../css/v/vspld8buo.css';
import '../../css/w/wbcfikbug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="l5u91vwjl wm-deco"/><path class="bkfrv9bzn wm-deco"/><path class="wm-k z7iiffx2i"/><path class="jia-glb4z wm-a"/><path class="vspld8buo wm-k"/><path class="wbcfikbug wm-a"/></g>`,
		"fallback": "withicons:arrow-right-to-line-blueprint",
	});
}

export default Component;
