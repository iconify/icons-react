import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bf-owdb6q.css';
import '../../css/t/tk0i2gzee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bf-owdb6q"/><path class="tk0i2gzee"/></g>`,
		"fallback": "tabler:building-factory",
	});
}

export default Component;
