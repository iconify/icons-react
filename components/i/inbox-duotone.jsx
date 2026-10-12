import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uvxfd2b7s.css';
import '../../css/j/jawt2pdal.css';
import '../../css/p/pf5yg-grl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uvxfd2b7s"/><path class="jawt2pdal"/><path class="pf5yg-grl"/></g>`,
		"fallback": "lucide-extended:inbox-duotone",
	});
}

export default Component;
