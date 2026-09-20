import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k5h671x0w.css';
import '../../css/w/wzhmyrrto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k5h671x0w"/><path class="wzhmyrrto"/></g>`,
		"fallback": "tabler:corner-down-left-double",
	});
}

export default Component;
