import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lh4_-wb-l.css';
import '../../css/b/bussztgsc.css';
import '../../css/i/ivyiakb7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lh4_-wb-l"/><path class="bussztgsc"/><path class="ivyiakb7x"/></g>`,
		"fallback": "lucide-extended:align-horizontal-distribute-start-duotone",
	});
}

export default Component;
