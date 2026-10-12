import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hgu2n8l7c.css';
import '../../css/h/hqvo53b3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hgu2n8l7c"/><path class="hqvo53b3w"/></g>`,
		"fallback": "lucide-extended:hard-hat-duotone",
	});
}

export default Component;
