import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k_5zdoero.css';
import '../../css/c/c8yirybsn.css';
import '../../css/e/e_g2v_b0n.css';
import '../../css/y/y9iyilb9a.css';
import '../../css/s/swsab_86e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="k_5zdoero"/><path class="c8yirybsn"/><path class="e_g2v_b0n"/><path class="y9iyilb9a"/><circle class="swsab_86e"/></g>`,
		"fallback": "solar:folder-path-connect-linear",
	});
}

export default Component;
