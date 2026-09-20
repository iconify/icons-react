import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/t2zaifbda.css';
import '../../css/r/rnb8pybkj.css';
import '../../css/l/le33cfb2c.css';
import '../../css/r/r2eztqbdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="t2zaifbda"/><path class="rnb8pybkj"/><path class="le33cfb2c"/><path class="r2eztqbdd"/></g>`,
		"fallback": "streamline-sharp:camera-flip-1",
	});
}

export default Component;
