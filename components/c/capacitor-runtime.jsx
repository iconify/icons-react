import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gf562yesk.css';
import '../../css/c/cnej8nbnf.css';
import '../../css/g/gkd3fq_9k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gf562yesk"/><path class="cnej8nbnf"/><path class="gkd3fq_9k"/>`,
		"fallback": "selfhst:capacitor-runtime",
	});
}

export default Component;
