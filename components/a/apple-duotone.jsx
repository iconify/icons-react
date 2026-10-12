import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q8ymr1bcw.css';
import '../../css/l/lsu2lbbmr.css';
import '../../css/i/itah7mg6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q8ymr1bcw"/><path class="lsu2lbbmr"/><path class="itah7mg6f"/></g>`,
		"fallback": "lucide-extended:apple-duotone",
	});
}

export default Component;
