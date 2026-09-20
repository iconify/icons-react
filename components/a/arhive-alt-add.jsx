import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/n/nf6zy_b6r.css';
import '../../css/m/mr4ysib0c.css';
import '../../css/e/em93k3h0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="nf6zy_b6r"/><path class="mr4ysib0c"/><path class="em93k3h0f"/></g>`,
		"fallback": "lets-icons:arhive-alt-add",
	});
}

export default Component;
