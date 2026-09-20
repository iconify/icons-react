import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vnbx2b2zx.css';
import '../../css/j/j8kuw0sgj.css';
import '../../css/f/fr98mpz8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vnbx2b2zx"/><path class="j8kuw0sgj"/><path clip-rule="evenodd" class="fr98mpz8y"/></g>`,
		"fallback": "solar:ghost-outline",
	});
}

export default Component;
