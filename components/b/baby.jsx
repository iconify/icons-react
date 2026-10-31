import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bxr5d9bvc.css';
import '../../css/h/h-m0gbcsq.css';
import '../../css/q/qejnykb_h.css';
import '../../css/g/gt8xmnbqp.css';
import '../../css/w/w_8n0tblr.css';
import '../../css/f/fbr60cczi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="bxr5d9bvc wm-shadow"/><path class="h-m0gbcsq"/><path class="qejnykb_h"/><path class="gt8xmnbqp"/><path class="w_8n0tblr"/><path class="fbr60cczi"/></g>`,
		"fallback": "withicons-retro:baby",
	});
}

export default Component;
