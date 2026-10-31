import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fesy9nboh.css';
import '../../css/q/qjy5isb_h.css';
import '../../css/k/kkdr4eska.css';
import '../../css/q/q5xvfhyqv.css';
import '../../css/m/m-_1gho_k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fesy9nboh"/><path class="qjy5isb_h"/><path class="kkdr4eska"/><path class="q5xvfhyqv"/><path class="m-_1gho_k"/></g>`,
		"fallback": "streamline-kameleon-color:heart-watch-pop",
	});
}

export default Component;
