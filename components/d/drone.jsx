import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/e838ehlnw.css';
import '../../css/j/jjlni_b5z.css';
import '../../css/p/pz5v7bauy.css';
import '../../css/y/yj1scxbnj.css';
import '../../css/l/l3l0oubsy.css';
import '../../css/x/x71fhsbla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="e838ehlnw wm-shadow"/><path class="jjlni_b5z"/><path class="pz5v7bauy"/><path class="yj1scxbnj"/><path class="l3l0oubsy"/><path class="x71fhsbla"/></g>`,
		"fallback": "withicons-retro:drone",
	});
}

export default Component;
