import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l1gnxjbff.css';
import '../../css/p/p9_fnd36p.css';
import '../../css/p/p2kdwhbjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l1gnxjbff"/><path class="p9_fnd36p"/><path class="p2kdwhbjk"/></g>`,
		"fallback": "tdesign:file-search",
	});
}

export default Component;
