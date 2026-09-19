import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/w/w6ss4accp.css';
import '../../css/j/jnn7bgbxn.css';
import '../../css/h/h1c5pezal.css';
import '../../css/v/v05q4lmkt.css';
import '../../css/k/kfix1ybbw.css';
import '../../css/b/bwob3ob7c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="w6ss4accp"/><rect class="jnn7bgbxn"/><path class="h1c5pezal"/><path class="v05q4lmkt"/><path class="kfix1ybbw"/><path class="bwob3ob7c"/></g>`,
		"fallback": "icon-park:financing-two",
	});
}

export default Component;
