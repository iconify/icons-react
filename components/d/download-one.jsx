import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/eya7z3bzi.css';
import '../../css/j/j2k31gbuw.css';
import '../../css/r/r4eis3b_r.css';
import '../../css/d/dq4-gsbxv.css';
import '../../css/b/brl0tzdgt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="eya7z3bzi"/><path class="j2k31gbuw"/><path class="r4eis3b_r"/><path class="dq4-gsbxv"/><path class="brl0tzdgt"/></g>`,
		"fallback": "icon-park:download-one",
	});
}

export default Component;
