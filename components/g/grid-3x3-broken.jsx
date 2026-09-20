import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xscxw-bfa.css';
import '../../css/a/ak-l-xbnm.css';
import '../../css/a/aieq2_btc.css';
import '../../css/j/jojyntb-y.css';
import '../../css/z/ztzrfkqqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xscxw-bfa"/><path class="ak-l-xbnm"/><path class="aieq2_btc"/><path class="jojyntb-y"/><path class="ztzrfkqqj"/></g>`,
		"fallback": "solar:grid-3x3-broken",
	});
}

export default Component;
