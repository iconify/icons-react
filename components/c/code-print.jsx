import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/w/wmem73bqi.css';
import '../../css/s/s9vaek72t.css';
import '../../css/s/s6or2ib3w.css';
import '../../css/c/cugyjjriy.css';
import '../../css/n/n61x4i6nq.css';
import '../../css/u/uw-wiz_nf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><g class="nctb2ac4r"><path class="wmem73bqi"/><path class="s9vaek72t"/><path class="s6or2ib3w"/></g><path class="cugyjjriy"/><path class="n61x4i6nq"/><path class="uw-wiz_nf"/></g>`,
		"fallback": "pepicons:code-print",
	});
}

export default Component;
