import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bk5g6vb6i.css';
import '../../css/z/z1xltzbek.css';
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
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bk5g6vb6i"/><path class="z1xltzbek"/><path class="vpe84bb3m"/><circle class="btifitbvi"/><circle class="hvbmw2s_l"/></g>`,
		"fallback": "andrsrxn:folder-git",
	});
}

export default Component;
