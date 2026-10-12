import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vpxm9bbsu.css';
import '../../css/a/ac_vfwbhy.css';
import '../../css/y/y7rf6wbpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vpxm9bbsu"/><path class="ac_vfwbhy"/><path class="y7rf6wbpp"/></g>`,
		"fallback": "lucide-extended:folder-bookmark-duotone",
	});
}

export default Component;
