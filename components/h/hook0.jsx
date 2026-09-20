import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re-nm7b9x.css';
import '../../css/f/fcd9fub-m.css';
import '../../css/l/lc-745xnc.css';
import '../../css/x/xquyf4b9c.css';
import '../../css/t/tokuqsu-n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="re-nm7b9x"/><path class="fcd9fub-m"/><path class="lc-745xnc"/><path class="xquyf4b9c"/><path class="tokuqsu-n"/>`,
		"fallback": "selfhst:hook0",
	});
}

export default Component;
