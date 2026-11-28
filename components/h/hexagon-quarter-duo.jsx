import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rr1un1b7q.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b00ennbgq.css';
import '../../css/g/ga_74_gri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rr1un1b7q secondary"/><g class="dt0cm9dhy primary"><path class="b00ennbgq"/><path class="ga_74_gri"/></g>`,
		"fallback": "iconaut:hexagon-quarter-duo",
	});
}

export default Component;
