import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/s2jhl3wdg.css';
import '../../css/f/f96tanboz.css';
import '../../css/r/rbfijdg-s.css';
import '../../css/j/jonhdgbec.css';
import '../../css/l/lcctmzbhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="s2jhl3wdg wm-shadow"/><path class="f96tanboz"/><path class="rbfijdg-s"/><path class="jonhdgbec"/><path class="lcctmzbhv wm-s"/></g>`,
		"fallback": "withicons-retro:cloud-sun-rain",
	});
}

export default Component;
