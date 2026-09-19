import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/io6dfybax.css';
import '../../css/h/h7f25f_xf.css';
import '../../css/m/mh883ubvi.css';
import '../../css/k/k7o7obbpf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="io6dfybax"/><path clip-rule="evenodd" class="h7f25f_xf"/><path class="mh883ubvi"/><path clip-rule="evenodd" class="k7o7obbpf"/></g>`,
		"fallback": "healthicons:i-exam-multiple-choice2x-outline",
	});
}

export default Component;
