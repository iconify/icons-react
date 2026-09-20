import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tc51908st.css';
import '../../css/h/h07egnnok.css';
import '../../css/e/eld-26s5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="tc51908st"/><path class="h07egnnok"/><path clip-rule="evenodd" class="eld-26s5h"/></g>`,
		"fallback": "reicon:feed",
	});
}

export default Component;
