import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgtv46dtz.css';
import '../../css/s/ssh18kvpm.css';
import '../../css/u/ul6zk388y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pgtv46dtz"/><path class="ssh18kvpm"/><path class="ul6zk388y"/></g>`,
		"fallback": "lucide-extended:book-plus-duotone",
	});
}

export default Component;
