import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4s9j0-ru.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b00ennbgq.css';
import '../../css/o/otnhmebbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4s9j0-ru secondary"/><g class="dt0cm9dhy primary"><path class="b00ennbgq"/><path class="otnhmebbb"/></g>`,
		"fallback": "iconaut:hexagon-full-duo",
	});
}

export default Component;
