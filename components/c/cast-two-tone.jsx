import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y5-v_xbay.css';
import '../../css/u/u-7ninbzs.css';
import '../../css/d/dno4_nblm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y5-v_xbay"/><path class="u-7ninbzs"/><path class="dno4_nblm"/></g>`,
		"fallback": "keyline-icons:cast-two-tone",
	});
}

export default Component;
