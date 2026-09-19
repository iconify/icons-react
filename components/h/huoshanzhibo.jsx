import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhnlhhbgn.css';
import '../../css/t/t4_f6k39w.css';
import '../../css/u/uizh__bvn.css';
import '../../css/k/khlacg85o.css';
import '../../css/x/x7iyjcc3y.css';
import '../../css/c/c4hrshagc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhnlhhbgn"/><path class="t4_f6k39w"/><path class="uizh__bvn"/><path class="khlacg85o"/><path class="x7iyjcc3y"/><path class="c4hrshagc"/>`,
		"fallback": "icon-park:huoshanzhibo",
	});
}

export default Component;
