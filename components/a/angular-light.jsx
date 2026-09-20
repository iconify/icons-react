import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/x/xciy_gj5s.css';
import '../../css/p/pk3e8jb4d.css';
import '../../css/h/ha3-co41s.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path class="xciy_gj5s"/><path class="pk3e8jb4d"/><path class="ha3-co41s"/></g>`,
		"fallback": "skill-icons:angular-light",
	});
}

export default Component;
