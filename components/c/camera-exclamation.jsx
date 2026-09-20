import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h71j96b6g.css';
import '../../css/k/k-alowpaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h71j96b6g"/><path class="k-alowpaf"/></g>`,
		"fallback": "tabler:camera-exclamation",
	});
}

export default Component;
