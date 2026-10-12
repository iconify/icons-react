import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bn-zuqbqa.css';
import '../../css/d/d5_8fpbkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bn-zuqbqa"/><path class="d5_8fpbkk"/></g>`,
		"fallback": "andrsrxn:gold-bars",
	});
}

export default Component;
