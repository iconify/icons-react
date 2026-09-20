import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ryli0b21x.css';
import '../../css/k/kxrdghhzg.css';
import '../../css/v/vsuf1kbiw.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/b/b40mtibns.css';
import '../../css/w/wok593inm.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ryli0b21x"/><circle class="kxrdghhzg"/><path class="vsuf1kbiw"/><g class="jn8qy4bru"><path class="b40mtibns"/><path class="wok593inm"/></g>`,
		"fallback": "openmoji:emergency-exit",
	});
}

export default Component;
