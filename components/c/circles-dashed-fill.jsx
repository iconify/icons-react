import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lm8agdvjs.css';
import '../../css/q/q5f3lzm2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lm8agdvjs"/><path class="q5f3lzm2h"/></g>`,
		"fallback": "keyline-icons:circles-dashed-fill",
	});
}

export default Component;
