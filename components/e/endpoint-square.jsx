import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/k/kuqdplbdl.css';
import '../../css/t/tqb_6nb6c.css';
import '../../css/v/vim-wxqdx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="kuqdplbdl"/><circle class="tqb_6nb6c"/><path class="vim-wxqdx"/></g>`,
		"fallback": "icon-park-outline:endpoint-square",
	});
}

export default Component;
