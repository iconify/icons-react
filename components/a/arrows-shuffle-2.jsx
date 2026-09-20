import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ex4pajfvq.css';
import '../../css/p/p-n72cb9o.css';
import '../../css/v/vy6lhdbht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ex4pajfvq"/><path class="p-n72cb9o"/><path class="vy6lhdbht"/></g>`,
		"fallback": "tabler:arrows-shuffle-2",
	});
}

export default Component;
