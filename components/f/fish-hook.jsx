import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l1enzvncm.css';
import '../../css/g/g3fu8jb6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l1enzvncm"/><path class="g3fu8jb6x"/></g>`,
		"fallback": "tabler:fish-hook",
	});
}

export default Component;
