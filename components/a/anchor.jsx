import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/ploa71bki.css';
import '../../css/n/n3rsbi38y.css';
import '../../css/u/u2f_ne4qg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ploa71bki wm-a"/><path class="n3rsbi38y"/><path class="u2f_ne4qg"/></g>`,
		"fallback": "withicons:anchor",
	});
}

export default Component;
