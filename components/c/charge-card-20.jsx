import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abo8mtx2l.css';
import '../../css/r/ra-v9ybun.css';
import '../../css/v/vrssy_bnt.css';
import '../../css/r/rdtqoi99p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abo8mtx2l"/><path class="ra-v9ybun"/><path class="vrssy_bnt"/><path class="rdtqoi99p"/>`,
		"fallback": "energy-icons:charge-card-20",
	});
}

export default Component;
