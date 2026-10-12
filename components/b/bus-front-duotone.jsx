import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b0fe2obns.css';
import '../../css/i/if9wsf86l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b0fe2obns"/><path class="if9wsf86l"/></g>`,
		"fallback": "lucide-extended:bus-front-duotone",
	});
}

export default Component;
