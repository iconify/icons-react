import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/s/sb_sztbug.css';
import '../../css/p/pyfxcdc2g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="sb_sztbug"/><path class="pyfxcdc2g"/></g>`,
		"fallback": "icon-park:folder-open",
	});
}

export default Component;
