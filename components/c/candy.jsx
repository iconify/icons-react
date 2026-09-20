import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o-m6-9brp.css';
import '../../css/j/j3c9szwlt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o-m6-9brp"/><path class="j3c9szwlt"/></g>`,
		"fallback": "tabler:candy",
	});
}

export default Component;
