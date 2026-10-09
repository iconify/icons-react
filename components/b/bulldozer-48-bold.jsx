import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aboildb3y.css';
import '../../css/l/lmwyhio7v.css';
import '../../css/s/s41_mub4p.css';
import '../../css/v/v6cvb-w5m.css';
import '../../css/s/suc6gkb7q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aboildb3y"/><path class="lmwyhio7v"/><path class="s41_mub4p"/><path class="v6cvb-w5m"/><path class="suc6gkb7q"/>`,
		"fallback": "energy-icons:bulldozer-48-bold",
	});
}

export default Component;
