import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/crnkz0bag.css';
import '../../css/b/bwusxd8bo.css';
import '../../css/d/d4hr9gupe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="crnkz0bag"/><path class="bwusxd8bo"/><path class="d4hr9gupe"/></g>`,
		"fallback": "lucide-extended:folder-heart-duotone",
	});
}

export default Component;
