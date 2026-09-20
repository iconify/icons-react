import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/x/x22nze58s.css';
import '../../css/r/rfwxiqbdb.css';
import '../../css/m/mnrsv1eny.css';
import '../../css/u/ubs7hw6ze.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="xyjtgccot"><path clip-rule="evenodd" class="x22nze58s"/><path class="rfwxiqbdb"/></g><path clip-rule="evenodd" class="mnrsv1eny"/><path class="ubs7hw6ze"/></g>`,
		"fallback": "pepicons-print:info",
	});
}

export default Component;
