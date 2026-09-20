import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pt93twbsc.css';
import '../../css/w/wv5f_1brg.css';
import '../../css/d/dsp6khz0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="pt93twbsc"/><circle class="wv5f_1brg"/><path class="dsp6khz0q"/></g>`,
		"fallback": "proicons:anchor",
	});
}

export default Component;
