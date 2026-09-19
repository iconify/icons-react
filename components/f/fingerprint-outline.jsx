import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/tx-2acchp.css';
import '../../css/l/l-ehgjbqb.css';
import '../../css/e/ei8zogbbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="tx-2acchp"/><path class="l-ehgjbqb"/><path class="ei8zogbbt"/></g>`,
		"fallback": "bitcoin-icons:fingerprint-outline",
	});
}

export default Component;
