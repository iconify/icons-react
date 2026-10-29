import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lyz3fuknv.css';
import '../../css/z/zh7yrubjw.css';
import '../../css/c/cdnvyfk7r.css';
import '../../css/k/k8brllbsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="lyz3fuknv"/><path class="wm-k zh7yrubjw"/><path class="cdnvyfk7r wm-k"/><path class="k8brllbsz wm-a"/></g>`,
		"fallback": "withicons:clipboard-sketch",
	});
}

export default Component;
