import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnix5mb_n.css';
import '../../css/f/fvm61b_7b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnix5mb_n"/><path class="fvm61b_7b"/>`,
		"fallback": "selfhst:ackify",
	});
}

export default Component;
