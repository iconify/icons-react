import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/bb8tv3klv.css';
import '../../css/o/ohhif2h1l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="bb8tv3klv"/><path clip-rule="evenodd" class="ohhif2h1l"/></g>`,
		"fallback": "icon-park-solid:anchor-two",
	});
}

export default Component;
