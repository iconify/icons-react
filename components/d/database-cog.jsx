import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fpbm6upyz.css';
import '../../css/c/c6b-6xbhu.css';
import '../../css/i/irg7wmbrj.css';
import '../../css/c/cwp4jz37v.css';
import '../../css/d/dq60wlbxs.css';
import '../../css/b/b9him6jfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="fpbm6upyz"/><path class="c6b-6xbhu"/><path class="irg7wmbrj"/><path class="cwp4jz37v"/><path class="dq60wlbxs"/><path class="b9him6jfk"/></g>`,
		"fallback": "iconaut:database-cog",
	});
}

export default Component;
