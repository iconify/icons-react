import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t4qt24b8e.css';
import '../../css/l/lhk9awblp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t4qt24b8e"/><path class="lhk9awblp"/></g>`,
		"fallback": "lucide-extended:film-duotone",
	});
}

export default Component;
