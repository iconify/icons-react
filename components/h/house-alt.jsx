import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_cyjh5hd.css';
import '../../css/s/sjowjbelj.css';
import '../../css/p/pn1j06bwr.css';
import '../../css/k/kzcihjbyg.css';
import '../../css/q/q721goyim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n_cyjh5hd"><path class="sjowjbelj"/><path class="pn1j06bwr"/><path class="kzcihjbyg"/><path class="q721goyim"/></g>`,
		"fallback": "reicon:house-alt",
	});
}

export default Component;
