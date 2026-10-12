import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hogx2radb.css';
import '../../css/p/p7si66b8d.css';
import '../../css/l/lobfmib2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hogx2radb"/><path class="p7si66b8d"/><path class="lobfmib2l"/></g>`,
		"fallback": "lucide-extended:coins-duotone",
	});
}

export default Component;
