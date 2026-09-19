import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/r00m7gbsq.css';
import '../../css/b/b-1xmhblp.css';
import '../../css/e/e17mij6_y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="r00m7gbsq"/><path class="b-1xmhblp"/><path class="e17mij6_y"/></g>`,
		"fallback": "icon-park:folder-withdrawal-one",
	});
}

export default Component;
