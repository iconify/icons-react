import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wksup-1_p.css';
import '../../css/r/r0_9jbcny.css';
import '../../css/w/wcmprwboc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wksup-1_p"/><path class="r0_9jbcny"/><path class="wcmprwboc"/>`,
		"fallback": "flag:es-pv-1x1",
	});
}

export default Component;
