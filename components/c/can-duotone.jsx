import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/osa774bht.css';
import '../../css/y/yh1jv4bwi.css';
import '../../css/r/r0ymitb5z.css';
import '../../css/y/ygm0plb9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="osa774bht"/><path class="yh1jv4bwi"/><path class="r0ymitb5z"/><path class="ygm0plb9q"/></g>`,
		"fallback": "lucide-extended:can-duotone",
	});
}

export default Component;
