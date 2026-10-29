import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/x4639o9tv.css';
import '../../css/c/c82oayb2j.css';
import '../../css/y/yatyg0v9y.css';
import '../../css/y/yrltrgtcf.css';
import '../../css/q/qz9z-gq3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="x4639o9tv"/><path class="c82oayb2j"/><path class="wm-a yatyg0v9y"/><path class="yrltrgtcf"/><path class="qz9z-gq3n wm-a"/></g>`,
		"fallback": "withicons:git-compare",
	});
}

export default Component;
