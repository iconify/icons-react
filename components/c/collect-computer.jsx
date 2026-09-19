import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/r21mhje2a.css';
import '../../css/r/rgpfwjbgz.css';
import '../../css/p/p8o016kgn.css';
import '../../css/b/bkdxgfk0q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="r21mhje2a"/><path class="rgpfwjbgz"/><path class="p8o016kgn"/><path class="bkdxgfk0q"/></g>`,
		"fallback": "icon-park:collect-computer",
	});
}

export default Component;
