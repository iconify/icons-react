import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r2ln9-bjf.css';
import '../../css/p/prm-8fb4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r2ln9-bjf"/><path class="prm-8fb4l"/></g>`,
		"fallback": "coolicons:building-4-duocolor-round",
	});
}

export default Component;
