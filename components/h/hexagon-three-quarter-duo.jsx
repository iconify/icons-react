import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x38bp_tbj.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b00ennbgq.css';
import '../../css/e/e-3suj6zv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary x38bp_tbj"/><g class="dt0cm9dhy primary"><path class="b00ennbgq"/><path class="e-3suj6zv"/></g>`,
		"fallback": "iconaut:hexagon-three-quarter-duo",
	});
}

export default Component;
