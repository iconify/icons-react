import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d1rcu7d8h.css';
import '../../css/e/eox6dq53k.css';
import '../../css/k/kah-p9bbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="d1rcu7d8h"/><path class="eox6dq53k"/><path class="kah-p9bbs"/></g>`,
		"fallback": "solar:align-vertical-center-line-duotone",
	});
}

export default Component;
