import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xscxw-bfa.css';
import '../../css/a/ak-l-xbnm.css';
import '../../css/e/emel-ifwl.css';
import '../../css/c/c-y9gqbtc.css';
import '../../css/p/pdxc586_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xscxw-bfa"/><path class="ak-l-xbnm"/><path class="emel-ifwl"/><path class="c-y9gqbtc"/><path class="pdxc586_x"/></g>`,
		"fallback": "solar:grid-3x3-broken",
	});
}

export default Component;
