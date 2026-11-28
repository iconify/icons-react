import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fj1rrbp7w.css';
import '../../css/u/un4hlcc2o.css';
import '../../css/y/y_l4j8q6v.css';
import '../../css/b/b2zq5ub_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="fj1rrbp7w"/><path class="un4hlcc2o"/><path class="y_l4j8q6v"/><path class="b2zq5ub_g"/></g>`,
		"fallback": "iconaut:alert-double",
	});
}

export default Component;
