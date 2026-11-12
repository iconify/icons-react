import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbtomab4q.css';
import '../../css/t/tytji7n_q.css';
import '../../css/e/egb1_lbof.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="lbtomab4q"/><path class="tytji7n_q"/><path class="egb1_lbof"/>`,
		"fallback": "selfhst:dumbpad",
	});
}

export default Component;
