import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xbj-e-6di.css';
import '../../css/z/z3vibnb9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xbj-e-6di"/><path class="z3vibnb9x"/></g>`,
		"fallback": "coolicons:coffee-duocolor-round",
	});
}

export default Component;
