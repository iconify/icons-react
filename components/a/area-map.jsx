import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/s/s-8750bmt.css';
import '../../css/g/ga23znbsx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="s-8750bmt"/><path class="ga23znbsx"/></g>`,
		"fallback": "icon-park:area-map",
	});
}

export default Component;
