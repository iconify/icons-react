import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/a7b-4cxey.css';
import '../../css/r/roa4jsr0h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="a7b-4cxey"/><path class="roa4jsr0h"/></g>`,
		"fallback": "icon-park-solid:foundation-makeup",
	});
}

export default Component;
