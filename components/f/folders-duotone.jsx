import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h2xz0_bat.css';
import '../../css/w/wbfa45b6c.css';
import '../../css/j/j-46o3b4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h2xz0_bat"/><path class="wbfa45b6c"/><path class="j-46o3b4r"/></g>`,
		"fallback": "lucide-extended:folders-duotone",
	});
}

export default Component;
