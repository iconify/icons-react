import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/l/lrceeobdw.css';
import '../../css/o/om07i518n.css';
import '../../css/y/yvk1rjkvs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="lrceeobdw"/><path clip-rule="evenodd" class="om07i518n"/></g><path clip-rule="evenodd" class="yvk1rjkvs"/></g>`,
		"fallback": "pepicons-print:bank",
	});
}

export default Component;
