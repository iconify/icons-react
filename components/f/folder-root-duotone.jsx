import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uosw-0eyq.css';
import '../../css/x/x7-tn3b9i.css';
import '../../css/a/apjv0bbim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uosw-0eyq"/><path class="x7-tn3b9i"/><path class="apjv0bbim"/></g>`,
		"fallback": "lucide-extended:folder-root-duotone",
	});
}

export default Component;
