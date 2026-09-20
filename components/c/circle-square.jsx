import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/aio_58brh.css';
import '../../css/y/yg43dxi-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="aio_58brh"/><path class="yg43dxi-l"/></g>`,
		"fallback": "tabler:circle-square",
	});
}

export default Component;
