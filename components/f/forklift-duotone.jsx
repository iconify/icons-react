import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/srgpqyrmb.css';
import '../../css/e/ekiupr2qe.css';
import '../../css/b/bet4yfb4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="srgpqyrmb"/><path class="ekiupr2qe"/><path class="bet4yfb4x"/></g>`,
		"fallback": "lucide-extended:forklift-duotone",
	});
}

export default Component;
