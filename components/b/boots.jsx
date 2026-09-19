import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/j/jli7p4p0f.css';
import '../../css/y/ypi188d1l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="jli7p4p0f"/><path class="ypi188d1l"/></g>`,
		"fallback": "icon-park:boots",
	});
}

export default Component;
