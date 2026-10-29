import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uoqmh3b_g.css';
import '../../css/b/b9iiq2beg.css';
import '../../css/v/vyfqjvtfg.css';
import '../../css/j/jefzkbbic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="uoqmh3b_g"/><path class="b9iiq2beg wm-a"/><path class="vyfqjvtfg"/><path class="jefzkbbic wm-a"/></g>`,
		"fallback": "withicons:edit-duo",
	});
}

export default Component;
