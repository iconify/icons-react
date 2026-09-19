import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9qcacyl.css';
import '../../css/e/erzf03bmv.css';
import '../../css/r/rplob1ewi.css';
import '../../css/a/a0910tb-b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv9qcacyl"><path class="erzf03bmv"/><path class="rplob1ewi"/><path class="a0910tb-b"/></g>`,
		"fallback": "flag:cp-1x1",
	});
}

export default Component;
