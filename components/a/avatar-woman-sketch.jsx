import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fxisi3e-m.css';
import '../../css/n/nijlxnzfg.css';
import '../../css/n/n10g9-b5w.css';
import '../../css/r/rpjj2abjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="fxisi3e-m wm-k"/><path class="nijlxnzfg wm-a"/><path class="n10g9-b5w wm-k"/><path class="rpjj2abjl wm-a"/></g>`,
		"fallback": "withicons:avatar-woman-sketch",
	});
}

export default Component;
