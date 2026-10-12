import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/li021ljum.css';
import '../../css/b/bq6wdo9_z.css';
import '../../css/b/bj_q2zkol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="li021ljum"/><path class="bq6wdo9_z"/><path class="bj_q2zkol"/></g>`,
		"fallback": "lucide-extended:castle-duotone",
	});
}

export default Component;
