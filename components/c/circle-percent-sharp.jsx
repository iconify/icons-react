import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/u/uk-eumb3f.css';
import '../../css/r/r0knw1b4v.css';
import '../../css/n/n0kzgsfmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="uk-eumb3f"/><path class="r0knw1b4v"/><path class="n0kzgsfmm"/></g>`,
		"fallback": "keyline-icons:circle-percent-sharp",
	});
}

export default Component;
