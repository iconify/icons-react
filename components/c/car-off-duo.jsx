import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6b1zb9kl.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yzb6oqvjq.css';
import '../../css/k/kctztfb0y.css';
import '../../css/c/c44meob9i.css';
import '../../css/n/n8y_y0mgs.css';
import '../../css/r/rpgpq3b7h.css';
import '../../css/e/eo_76b8fd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6b1zb9kl secondary"/><g class="dt0cm9dhy primary"><path class="yzb6oqvjq"/><path class="kctztfb0y"/><path class="c44meob9i"/><path class="n8y_y0mgs"/><path class="rpgpq3b7h"/><path class="eo_76b8fd"/></g>`,
		"fallback": "iconaut:car-off-duo",
	});
}

export default Component;
