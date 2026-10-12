import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q9m4wbabb.css';
import '../../css/g/gzuk2y92h.css';
import '../../css/s/soyhk2b0v.css';
import '../../css/g/ggi55vaju.css';
import '../../css/z/z66f1wbpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q9m4wbabb"/><path class="gzuk2y92h"/><path class="soyhk2b0v"/><path class="ggi55vaju"/><rect class="z66f1wbpe"/></g>`,
		"fallback": "andrsrxn:ev-charger",
	});
}

export default Component;
