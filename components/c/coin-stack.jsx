import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e1yrmrb5y.css';
import '../../css/j/j3a5w_u7c.css';
import '../../css/t/tyk_embkd.css';
import '../../css/j/jnndmrrof.css';
import '../../css/t/tj4twqsnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e1yrmrb5y"/><path class="j3a5w_u7c"/><path class="tyk_embkd"/><path class="jnndmrrof"/><path class="tj4twqsnm"/></g>`,
		"fallback": "streamline-cyber-color:coin-stack",
	});
}

export default Component;
