import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cx-tykdha.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zofy89fep.css';
import '../../css/o/o-3uwz6hx.css';
import '../../css/f/fmqiscccf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cx-tykdha secondary"/><g class="dt0cm9dhy primary"><path class="zofy89fep"/><path class="o-3uwz6hx"/><path class="fmqiscccf"/></g>`,
		"fallback": "iconaut:database-duo",
	});
}

export default Component;
