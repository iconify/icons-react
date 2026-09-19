import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/b/bg3qvlbku.css';
import '../../css/r/rzec_1h6x.css';
import '../../css/z/zl80-5bog.css';
import '../../css/c/cmh00fb6h.css';
import '../../css/x/x2adjnnam.css';
import '../../css/l/lllitsa4b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><g class="nctb2ac4r"><path class="bg3qvlbku"/><path class="rzec_1h6x"/><path class="zl80-5bog"/></g><path class="cmh00fb6h"/><path class="x2adjnnam"/><path class="lllitsa4b"/></g>`,
		"fallback": "pepicons:arrow-down-right-print",
	});
}

export default Component;
