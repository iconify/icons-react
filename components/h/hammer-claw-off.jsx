import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/h/h6y8bobzg.css';
import '../../css/r/rmtqtsbnr.css';
import '../../css/u/u94erzloj.css';
import '../../css/a/atw9ddvpd.css';
import '../../css/u/u11h9wbsf.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="h6y8bobzg"/><path clip-rule="evenodd" class="rmtqtsbnr"/><path clip-rule="evenodd" class="u94erzloj"/></g><path clip-rule="evenodd" class="atw9ddvpd"/><path clip-rule="evenodd" class="u11h9wbsf"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:hammer-claw-off",
	});
}

export default Component;
