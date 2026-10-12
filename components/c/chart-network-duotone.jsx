import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dm5tfv27h.css';
import '../../css/d/dbq_7acij.css';
import '../../css/x/xxavhac7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dm5tfv27h"/><path class="dbq_7acij"/><path class="xxavhac7v"/></g>`,
		"fallback": "lucide-extended:chart-network-duotone",
	});
}

export default Component;
