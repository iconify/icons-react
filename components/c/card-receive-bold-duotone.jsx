import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/skh9duprn.css';
import '../../css/s/sqocwka7w.css';
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
		"content": `<g class="cuyn6tgcc"><path class="skh9duprn"/><path class="sqocwka7w"/><path class="wotaafb6p"/><path class="g2lch4bat"/><path class="o1cpgsbzo"/></g>`,
		"fallback": "solar:card-receive-bold-duotone",
	});
}

export default Component;
