import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b5hubrben.css';
import '../../css/d/dcz6qmb3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b5hubrben"/><path class="dcz6qmb3b"/></g>`,
		"fallback": "lucide-extended:can-soda-duotone",
	});
}

export default Component;
