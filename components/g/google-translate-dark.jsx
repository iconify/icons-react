import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ng52_txct.css';
import '../../css/c/c03hhtb_l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ng52_txct"/><path class="c03hhtb_l"/>`,
		"fallback": "selfhst:google-translate-dark",
	});
}

export default Component;
