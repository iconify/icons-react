import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm9seubrr.css';
import '../../css/q/qg-5dvucd.css';
import '../../css/v/vpbft2t1h.css';
import '../../css/d/ditzk3ldv.css';
import '../../css/f/fp1l5qbvf.css';
import '../../css/s/sf01u1jlb.css';
import '../../css/c/c1tijmboh.css';
import '../../css/y/y8u715bhb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm9seubrr"/><path class="qg-5dvucd"/><path class="vpbft2t1h"/><path class="ditzk3ldv"/><path class="fp1l5qbvf"/><path class="sf01u1jlb"/><path class="c1tijmboh"/><path class="y8u715bhb"/>`,
		"fallback": "carbon:cross-reference",
	});
}

export default Component;
