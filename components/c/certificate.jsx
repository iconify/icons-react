import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j8e8rbc6x.css';
import '../../css/n/nqrz7szok.css';
import '../../css/j/j6md0tpiy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j8e8rbc6x"/><path class="nqrz7szok"/><path class="j6md0tpiy"/></g>`,
		"fallback": "tabler:certificate",
	});
}

export default Component;
