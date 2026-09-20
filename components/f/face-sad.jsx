import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nb9iv5bjp.css';
import '../../css/u/ub4d63l7m.css';
import '../../css/a/ay4kxuviq.css';
import '../../css/b/bcco9ob2k.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(2 2)" class="bi12bsetm"><path class="nb9iv5bjp"/><circle class="ub4d63l7m"/><circle class="ay4kxuviq"/><path class="bcco9ob2k"/></g>`,
		"fallback": "system-uicons:face-sad",
	});
}

export default Component;
