import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ot-rahdwk.css';
import '../../css/m/mk7apdhpz.css';
import '../../css/f/fgrlfobbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ot-rahdwk"/><path class="mk7apdhpz"/><path class="fgrlfobbu"/>`,
		"fallback": "solar:command-bold",
	});
}

export default Component;
