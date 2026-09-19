import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/s/sf0awh29u.css';
import '../../css/g/g36pz7bfc.css';
import '../../css/x/xwzchdbbp.css';
import '../../css/e/e_2tnhevm.css';
import '../../css/h/h7p_w-bus.css';
import '../../css/z/zb83o3b8y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><g class="nctb2ac4r"><path class="sf0awh29u"/><path class="g36pz7bfc"/><path class="xwzchdbbp"/></g><path class="e_2tnhevm"/><path class="h7p_w-bus"/><path class="zb83o3b8y"/></g>`,
		"fallback": "pepicons:arrow-up-left-print",
	});
}

export default Component;
