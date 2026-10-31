import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/u/u0v0obbvx.css';
import '../../css/k/kn21p-bsc.css';
import '../../css/d/dzd6ismax.css';
import '../../css/b/bcdke8buh.css';
import '../../css/r/rh33mfbxq.css';
import '../../css/x/xq6wqwbjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="u0v0obbvx"/><path class="kn21p-bsc"/><path class="dzd6ismax wm-shine"/><path class="bcdke8buh wm-k"/><path class="rh33mfbxq wm-a"/><path class="wm-deco xq6wqwbjv"/></g>`,
		"fallback": "withicons-kawaii:avatar-cat",
	});
}

export default Component;
