import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oupujh1tx.css';
import '../../css/g/g36t2-bad.css';
import '../../css/o/oaczw2b9c.css';
import '../../css/n/nonfo6b0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oupujh1tx"/><path class="g36t2-bad"/><path class="oaczw2b9c"/><path class="nonfo6b0y"/></g>`,
		"fallback": "lucide-extended:cheese-duotone",
	});
}

export default Component;
