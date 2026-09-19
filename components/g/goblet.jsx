import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/b/bz5i6qhaf.css';
import '../../css/l/lnzpgcbxn.css';
import '../../css/u/uomubg4id.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="bz5i6qhaf"/><path class="lnzpgcbxn"/><path class="uomubg4id"/></g>`,
		"fallback": "icon-park:goblet",
	});
}

export default Component;
