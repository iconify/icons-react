import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/ltjxwnb3f.css';
import '../../css/b/b3s_nab_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ltjxwnb3f"/><path class="b3s_nab_h"/></g>`,
		"fallback": "iconaut:droplets",
	});
}

export default Component;
