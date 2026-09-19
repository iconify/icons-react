import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pda2nj2-h.css';
import '../../css/p/p5a431nyw.css';
import '../../css/n/nh1vg0-7e.css';
import '../../css/h/h53urobcy.css';
import '../../css/r/roszgbbtf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pda2nj2-h"/><path class="p5a431nyw"/><path class="nh1vg0-7e"/><path class="h53urobcy"/><path class="roszgbbtf"/></g>`,
		"fallback": "fluent-emoji-flat:bathtub",
	});
}

export default Component;
