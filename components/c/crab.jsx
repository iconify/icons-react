import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/ronjz08st.css';
import '../../css/p/p-phxmbxs.css';
import '../../css/e/e92ucll6c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="ronjz08st"/><rect class="p-phxmbxs"/><path class="e92ucll6c"/></g>`,
		"fallback": "icon-park-solid:crab",
	});
}

export default Component;
