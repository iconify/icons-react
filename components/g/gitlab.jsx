import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rciwx7bwu.css';
import '../../css/y/ym3jfkbrh.css';
import '../../css/r/rmme9m09l.css';
import '../../css/g/g0h8z3bqp.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rciwx7bwu"/><path class="ym3jfkbrh"/><path class="rmme9m09l"/><path class="g0h8z3bqp"/>`,
		"fallback": "devicon:gitlab",
	});
}

export default Component;
