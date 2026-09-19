import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/m/mm_aw0bii.css';
import '../../css/c/ce_gtac-e.css';
import '../../css/v/vc1hcbbrn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="mm_aw0bii"/><path class="ce_gtac-e"/><path class="vc1hcbbrn"/></g>`,
		"fallback": "icon-park-outline:bridge-two",
	});
}

export default Component;
