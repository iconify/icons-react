import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v9_slbp1v.css';
import '../../css/t/tt34gss_n.css';
import '../../css/w/wnyvyjvdg.css';
import '../../css/u/uo0bl3mar.css';
import '../../css/j/j4c5dlbhq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v9_slbp1v"/><path class="tt34gss_n"/><path class="wnyvyjvdg"/><path class="uo0bl3mar"/><path class="j4c5dlbhq"/></g>`,
		"fallback": "icon-park:doc-search",
	});
}

export default Component;
