import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mj2xv31vp.css';
import '../../css/t/tbb030bka.css';
import '../../css/y/ya2aiy5hu.css';
import '../../css/e/ej-08c4be.css';
import '../../css/s/szbc8ab8h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mj2xv31vp"/><path class="tbb030bka"/><path class="ya2aiy5hu"/><path class="ej-08c4be"/><path class="szbc8ab8h"/></g>`,
		"fallback": "streamline-color:desktop-favorite-star",
	});
}

export default Component;
