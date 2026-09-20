import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bs49p9bxw.css';
import '../../css/d/d8701eqsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bs49p9bxw"/><path class="d8701eqsu"/></g>`,
		"fallback": "tabler:cheese",
	});
}

export default Component;
