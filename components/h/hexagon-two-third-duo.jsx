import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwu_5rbeb.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b00ennbgq.css';
import '../../css/c/cxeo3lbqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwu_5rbeb secondary"/><g class="dt0cm9dhy primary"><path class="b00ennbgq"/><path class="cxeo3lbqb"/></g>`,
		"fallback": "iconaut:hexagon-two-third-duo",
	});
}

export default Component;
