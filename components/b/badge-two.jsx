import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/w/w7bq11q3s.css';
import '../../css/b/bq_9nmq8p.css';
import '../../css/v/vvnoc_b4o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="w7bq11q3s"/><path class="bq_9nmq8p"/><path class="vvnoc_b4o"/></g>`,
		"fallback": "icon-park-outline:badge-two",
	});
}

export default Component;
