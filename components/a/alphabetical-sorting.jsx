import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/ro-ndbboz.css';
import '../../css/u/u04j_4blr.css';
import '../../css/a/ad35c604d.css';
import '../../css/f/f33xojb2e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ro-ndbboz"/><path class="u04j_4blr"/><path class="ad35c604d"/><path class="f33xojb2e"/></g>`,
		"fallback": "icon-park:alphabetical-sorting",
	});
}

export default Component;
