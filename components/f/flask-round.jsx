import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b1ienzhrd.css';
import '../../css/m/m6z3eqbcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b1ienzhrd"/><path class="m6z3eqbcm"/></g>`,
		"fallback": "vadivam:flask-round",
	});
}

export default Component;
