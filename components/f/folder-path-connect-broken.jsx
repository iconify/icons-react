import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k_5zdoero.css';
import '../../css/e/e_g2v_b0n.css';
import '../../css/y/y9iyilb9a.css';
import '../../css/s/swsab_86e.css';
import '../../css/c/c8i-6ubkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="k_5zdoero"/><path class="e_g2v_b0n"/><path class="y9iyilb9a"/><circle class="swsab_86e"/><path class="c8i-6ubkl"/></g>`,
		"fallback": "solar:folder-path-connect-broken",
	});
}

export default Component;
