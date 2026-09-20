import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/j/jn9wpbcya.css';
import '../../css/p/p31lbcbnb.css';
import '../../css/i/itpljo0rb.css';
import '../../css/t/twalh0rvl.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="jn9wpbcya"/><path class="p31lbcbnb"/><path class="itpljo0rb"/><path class="twalh0rvl"/></g>`,
		"fallback": "marketeq:acrobatic-2",
	});
}

export default Component;
