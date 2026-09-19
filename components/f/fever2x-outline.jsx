import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e64zggb9q.css';
import '../../css/q/qa1pr5opa.css';
import '../../css/e/ef0iey_7q.css';
import '../../css/n/nvhvr-q_f.css';
import '../../css/e/ew0b2ucae.css';
import '../../css/m/mc404gcyp.css';
import '../../css/a/a6vr1hunw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="e64zggb9q"/><path class="qa1pr5opa"/><path clip-rule="evenodd" class="ef0iey_7q"/><path class="nvhvr-q_f"/><path clip-rule="evenodd" class="ew0b2ucae"/><path clip-rule="evenodd" class="mc404gcyp"/><path class="a6vr1hunw"/></g>`,
		"fallback": "healthicons:fever2x-outline",
	});
}

export default Component;
