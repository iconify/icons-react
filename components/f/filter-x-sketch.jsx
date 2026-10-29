import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/he7y-4bpu.css';
import '../../css/a/aolsmqbfe.css';
import '../../css/l/l9srymntf.css';
import '../../css/s/s-m01cccu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="he7y-4bpu"/><path class="aolsmqbfe wm-s"/><path class="l9srymntf wm-k"/><path class="s-m01cccu wm-s"/></g>`,
		"fallback": "withicons:filter-x-sketch",
	});
}

export default Component;
