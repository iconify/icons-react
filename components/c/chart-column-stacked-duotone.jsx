import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d10hjnbyz.css';
import '../../css/q/qoffap17o.css';
import '../../css/r/r726-2bju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d10hjnbyz"/><path class="qoffap17o"/><path class="r726-2bju"/></g>`,
		"fallback": "lucide-extended:chart-column-stacked-duotone",
	});
}

export default Component;
