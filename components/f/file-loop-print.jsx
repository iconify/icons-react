import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/t/tfgfbf3ck.css';
import '../../css/d/dtabfgpwq.css';
import '../../css/b/byo6l4-jy.css';
import '../../css/s/snj6n0nhb.css';
import '../../css/m/m9veq_bpm.css';
import '../../css/e/eql07jbbe.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path class="tfgfbf3ck"/><path clip-rule="evenodd" class="dtabfgpwq"/><path class="byo6l4-jy"/><path clip-rule="evenodd" class="snj6n0nhb"/></g><path clip-rule="evenodd" class="m9veq_bpm"/><path clip-rule="evenodd" class="eql07jbbe"/></g>`,
		"fallback": "pepicons:file-loop-print",
	});
}

export default Component;
