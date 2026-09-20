import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pudli4roa.css';
import '../../css/t/ty5w7mrdw.css';
import '../../css/v/v0vli9eqs.css';
import '../../css/f/fr98mpz8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pudli4roa"/><path class="ty5w7mrdw"/><path class="v0vli9eqs"/><path clip-rule="evenodd" class="fr98mpz8y"/></g>`,
		"fallback": "solar:ghost-smile-outline",
	});
}

export default Component;
