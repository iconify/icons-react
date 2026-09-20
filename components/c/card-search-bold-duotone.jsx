import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dqwn18b1s.css';
import '../../css/s/s7f1fwbbg.css';
import '../../css/w/wotaafb6p.css';
import '../../css/o/o1cpgsbzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dqwn18b1s"/><path clip-rule="evenodd" class="s7f1fwbbg"/><path class="wotaafb6p"/><path class="o1cpgsbzo"/></g>`,
		"fallback": "solar:card-search-bold-duotone",
	});
}

export default Component;
