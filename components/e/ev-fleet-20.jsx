import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkejm8ive.css';
import '../../css/f/fpp32ib9p.css';
import '../../css/t/tepjeob2b.css';
import '../../css/e/enngo8bkk.css';
import '../../css/y/y0pk5fbbb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkejm8ive"/><path class="fpp32ib9p"/><path class="tepjeob2b"/><path class="enngo8bkk"/><path class="y0pk5fbbb"/>`,
		"fallback": "energy-icons:ev-fleet-20",
	});
}

export default Component;
