import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/s/srhbvgbaj.css';
import '../../css/t/tgf1jxbcb.css';
import '../../css/h/hu_nuxbxh.css';
import '../../css/a/a9t4ey_1q.css';
import '../../css/p/p0km8_bsw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="srhbvgbaj"/><path class="tgf1jxbcb"/><path class="hu_nuxbxh"/><circle class="a9t4ey_1q"/><path class="p0km8_bsw"/></g>`,
		"fallback": "icon-park-outline:inspection",
	});
}

export default Component;
