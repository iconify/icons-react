import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8ivs9bqv.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bxnai1rka.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cs704ebew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVG9mmdqcjr" class="l8ivs9bqv"/></defs><g class="cuyn6tgcc"><path class="bxnai1rka"/><use href="#SVG9mmdqcjr" clip-rule="evenodd" class="d2kvgvbvc"/><path clip-rule="evenodd" class="cs704ebew"/><use href="#SVG9mmdqcjr" clip-rule="evenodd" class="d2kvgvbvc"/></g>`,
		"fallback": "reicon:home5-filled",
	});
}

export default Component;
