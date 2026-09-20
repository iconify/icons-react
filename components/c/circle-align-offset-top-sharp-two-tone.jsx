import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/b/bkcd5iben.css';
import '../../css/b/by26kkbis.css';
import '../../css/s/s63qubk_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="bkcd5iben"/><path class="by26kkbis"/><path class="s63qubk_z"/></g>`,
		"fallback": "keyline-icons:circle-align-offset-top-sharp-two-tone",
	});
}

export default Component;
