import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/t/t0u0fdctw.css';
import '../../css/e/e8fou4b1p.css';
import '../../css/q/q02acs62u.css';
import '../../css/t/twa_7s9jq.css';
import '../../css/e/eyby592po.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="t0u0fdctw"/><path class="e8fou4b1p"/><path class="q02acs62u"/><path clip-rule="evenodd" class="twa_7s9jq"/><path class="eyby592po"/></g>`,
		"fallback": "icon-park-outline:heart",
	});
}

export default Component;
