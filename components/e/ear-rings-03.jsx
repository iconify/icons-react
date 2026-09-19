import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/crc1j1oau.css';
import '../../css/s/snseyq-jg.css';
import '../../css/n/nrw4g0yux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="crc1j1oau"/><circle class="snseyq-jg"/><path class="nrw4g0yux"/></g>`,
		"fallback": "hugeicons:ear-rings-03",
	});
}

export default Component;
