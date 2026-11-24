import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/osq_iiixh.css';
import '../../css/m/mibkzifbb.css';
import '../../css/b/b7bwx7byr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="osq_iiixh"/><path class="mibkzifbb"/><path class="b7bwx7byr"/></g>`,
		"fallback": "lucide-extended:carets-from-axis-dashed-vertical-duotone",
	});
}

export default Component;
