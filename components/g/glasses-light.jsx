import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/d/deu51qbtw.css';
import '../../css/c/cj9-yqbqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="deu51qbtw"/><path class="cj9-yqbqr"/></g>`,
		"fallback": "lets-icons:glasses-light",
	});
}

export default Component;
