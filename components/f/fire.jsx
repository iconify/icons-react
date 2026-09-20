import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/c/c7odm7kem.css';
import '../../css/k/k9np32gbf.css';
import '../../css/g/gq3s25bqo.css';
import '../../css/k/keb4fmbmu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="c7odm7kem"/><path clip-rule="evenodd" class="k9np32gbf"/></g><path clip-rule="evenodd" class="gq3s25bqo"/><path clip-rule="evenodd" class="keb4fmbmu"/></g>`,
		"fallback": "pepicons-print:fire",
	});
}

export default Component;
