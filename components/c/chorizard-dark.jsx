import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_wo_pbay.css';
import '../../css/i/imad5bjrh.css';
import '../../css/x/xi-cb_bto.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_wo_pbay"/><path class="imad5bjrh"/><path class="xi-cb_bto"/>`,
		"fallback": "selfhst:chorizard-dark",
	});
}

export default Component;
