import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cs7rwyb8j.css';
import '../../css/r/ryym55jba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cs7rwyb8j"/><path class="ryym55jba"/></g>`,
		"fallback": "lucide-extended:eject-duotone",
	});
}

export default Component;
