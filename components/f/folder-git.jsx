import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/inm-bkb0t.css';
import '../../css/c/cr9ml0xvm.css';
import '../../css/v/vpe84bb3m.css';
import '../../css/b/btifitbvi.css';
import '../../css/h/hvbmw2s_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="inm-bkb0t"/><path class="cr9ml0xvm"/><path class="vpe84bb3m"/><circle class="btifitbvi"/><circle class="hvbmw2s_l"/></g>`,
		"fallback": "andrsrxn:folder-git",
	});
}

export default Component;
