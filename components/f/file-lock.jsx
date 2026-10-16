import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k05o5frbn.css';
import '../../css/a/ajf99rb5u.css';
import '../../css/d/dq8xtjbji.css';
import '../../css/k/khoqvbb0x.css';
import '../../css/m/mqorzenfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k05o5frbn"/><path class="ajf99rb5u"/><path class="dq8xtjbji"/><rect class="khoqvbb0x"/><path class="mqorzenfg"/></g>`,
		"fallback": "andrsrxn:file-lock",
	});
}

export default Component;
