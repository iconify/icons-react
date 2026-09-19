import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/d/drjnalbik.css';
import '../../css/g/g98q0dbmh.css';
import '../../css/j/jqjx1ob6l.css';
import '../../css/d/ddi291rxc.css';
import '../../css/x/xwg81gcfv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="drjnalbik"/><path class="g98q0dbmh"/><path class="jqjx1ob6l"/><path class="ddi291rxc"/><path class="xwg81gcfv"/></g>`,
		"fallback": "icon-park:document-folder",
	});
}

export default Component;
