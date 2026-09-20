import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iebr1bctr.css';
import '../../css/r/rv1rqnb3e.css';
import '../../css/b/bote1bc2y.css';
import '../../css/p/pq2uk9bbl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iebr1bctr"/><path class="rv1rqnb3e"/><path class="bote1bc2y"/><path class="pq2uk9bbl"/>`,
		"fallback": "selfhst:ashim-dark",
	});
}

export default Component;
