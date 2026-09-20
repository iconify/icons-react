import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cpuequbzk.css';
import '../../css/a/aqhok2bbj.css';
import '../../css/d/d_26pbbpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="cpuequbzk"/><circle class="aqhok2bbj"/><path class="d_26pbbpb"/></g>`,
		"fallback": "meteor-icons:chrome",
	});
}

export default Component;
