import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a125j6bwn.css';
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
		"content": `<path class="a125j6bwn secondary"/><g class="dt0cm9dhy primary"><path class="ltjxwnb3f"/><path class="b3s_nab_h"/></g>`,
		"fallback": "iconaut:droplets-duo",
	});
}

export default Component;
