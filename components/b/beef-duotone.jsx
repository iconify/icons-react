import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t38uxporw.css';
import '../../css/u/u604h754p.css';
import '../../css/b/bk7b1pwqb.css';
import '../../css/f/fov9xb5xc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t38uxporw"/><path class="u604h754p"/><path class="bk7b1pwqb"/><path class="fov9xb5xc"/></g>`,
		"fallback": "lucide-extended:beef-duotone",
	});
}

export default Component;
