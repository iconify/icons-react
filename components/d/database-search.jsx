import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/h3clwtb7p.css';
import '../../css/h/h_l78yaxm.css';
import '../../css/d/dt8z6xb6l.css';
import '../../css/i/iq7gmc7md.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="h3clwtb7p"/><ellipse class="h_l78yaxm"/><path class="dt8z6xb6l"/><path class="iq7gmc7md"/></g>`,
		"fallback": "hugeicons:database-search",
	});
}

export default Component;
