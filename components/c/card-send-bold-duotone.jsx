import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uq-v_ab0j.css';
import '../../css/u/ujc5rsb8q.css';
import '../../css/w/wotaafb6p.css';
import '../../css/g/g2lch4bat.css';
import '../../css/o/o1cpgsbzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uq-v_ab0j"/><path class="ujc5rsb8q"/><path class="wotaafb6p"/><path class="g2lch4bat"/><path class="o1cpgsbzo"/></g>`,
		"fallback": "solar:card-send-bold-duotone",
	});
}

export default Component;
