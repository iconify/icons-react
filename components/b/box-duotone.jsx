import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/evp8xsbel.css';
import '../../css/w/wu8w-7b0t.css';
import '../../css/l/lvwry-bxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="evp8xsbel"/><path class="wu8w-7b0t"/><path class="lvwry-bxz"/></g>`,
		"fallback": "lucide-extended:box-duotone",
	});
}

export default Component;
