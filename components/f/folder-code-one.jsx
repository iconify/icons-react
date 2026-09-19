import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/h_bs_1b0g.css';
import '../../css/d/dfz3wrn4q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="h_bs_1b0g"/><path class="dfz3wrn4q"/></g>`,
		"fallback": "icon-park-outline:folder-code-one",
	});
}

export default Component;
