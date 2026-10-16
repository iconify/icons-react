import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/loh4lgjac.css';
import '../../css/o/o4r3oob4v.css';
import '../../css/h/hi0a0ke7p.css';
import '../../css/z/ze-jfxgpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="loh4lgjac"/><path class="o4r3oob4v"/><path class="hi0a0ke7p"/><path class="ze-jfxgpg"/></g>`,
		"fallback": "andrsrxn:folder-refresh",
	});
}

export default Component;
