import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/d/d8561dbcl.css';
import '../../css/v/v2hl7bboe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="d8561dbcl"/><path class="v2hl7bboe"/></g>`,
		"fallback": "icon-park-outline:drop-down-list",
	});
}

export default Component;
