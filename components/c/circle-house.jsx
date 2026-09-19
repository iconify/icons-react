import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/c8elt-b4t.css';
import '../../css/o/oat89jb2f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="c8elt-b4t"/><path class="oat89jb2f"/></g>`,
		"fallback": "icon-park-solid:circle-house",
	});
}

export default Component;
