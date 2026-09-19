import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/n/nty3yjiit.css';
import '../../css/g/g0cyc-juj.css';
import '../../css/q/qmgylqlwm.css';
import '../../css/w/wuw6zlrxf.css';
import '../../css/s/syb_ccdgc.css';
import '../../css/e/eu3i1nbbo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><g class="nctb2ac4r"><path class="nty3yjiit"/><path class="g0cyc-juj"/><path class="qmgylqlwm"/></g><path class="wuw6zlrxf"/><path class="syb_ccdgc"/><path class="eu3i1nbbo"/></g>`,
		"fallback": "pepicons:arrow-down-print",
	});
}

export default Component;
