import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x7-tn3b9i.css';
import '../../css/r/rnefhfbia.css';
import '../../css/l/lpbjfab7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x7-tn3b9i"/><path class="rnefhfbia"/><path class="lpbjfab7w"/></g>`,
		"fallback": "lucide-extended:folder-search-2-duotone",
	});
}

export default Component;
