import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/r/rpek7dswr.css';
import '../../css/y/y79rd2ghl.css';
import '../../css/z/z4ro1s-_b.css';
import '../../css/u/u__h28bup.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="rpek7dswr"/><path class="y79rd2ghl"/><path class="z4ro1s-_b"/><path class="u__h28bup"/></g>`,
		"fallback": "icon-park-outline:consignment",
	});
}

export default Component;
