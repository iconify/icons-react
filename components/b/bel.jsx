import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rta1vqbep.css';
import '../../css/e/eldc1fran.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rta1vqbep"/><path class="eldc1fran"/>`,
		"fallback": "token:bel",
	});
}

export default Component;
