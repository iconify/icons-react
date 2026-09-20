import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ljnzsybuh.css';
import '../../css/p/pfb-g5f5t.css';
import '../../css/p/pop0a3r2p.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="ljnzsybuh"/><path class="pfb-g5f5t"/><path class="pop0a3r2p"/></g>`,
		"fallback": "skill-icons:cs",
	});
}

export default Component;
