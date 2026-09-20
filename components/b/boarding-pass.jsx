import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c5k5xebmz.css';
import '../../css/l/l3f3zybkk.css';
import '../../css/q/q597-pbpp.css';
import '../../css/m/mv2syyg4d.css';
import '../../css/z/z3qgnp3te.css';

const viewBox = {"width":41,"height":41,"top":-0.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c5k5xebmz"/><path class="l3f3zybkk"/><path class="q597-pbpp"/><path class="mv2syyg4d"/><path class="z3qgnp3te"/></g>`,
		"fallback": "streamline-stickies-color:boarding-pass",
	});
}

export default Component;
