import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwpk_5b-d.css';
import '../../css/g/guwa6_8ak.css';
import '../../css/v/v_sn19bay.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwpk_5b-d"/><path class="guwa6_8ak"/><path class="v_sn19bay"/>`,
		"fallback": "devicon:cloudflare",
	});
}

export default Component;
