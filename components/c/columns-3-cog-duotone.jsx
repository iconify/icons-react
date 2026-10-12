import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iasuuhpco.css';
import '../../css/y/yr6qz5p1q.css';
import '../../css/g/gg656motp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iasuuhpco"/><path class="yr6qz5p1q"/><path class="gg656motp"/></g>`,
		"fallback": "lucide-extended:columns-3-cog-duotone",
	});
}

export default Component;
