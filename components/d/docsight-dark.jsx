import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pc22oabts.css';
import '../../css/b/b2k7vhb6z.css';
import '../../css/b/b_g6eybgy.css';
import '../../css/k/k565abc4m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pc22oabts"/><path class="b2k7vhb6z"/><path class="b_g6eybgy"/><circle class="k565abc4m"/>`,
		"fallback": "selfhst:docsight-dark",
	});
}

export default Component;
