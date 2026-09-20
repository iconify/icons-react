import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fzijzmb3g.css';
import '../../css/w/wstek7eqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fzijzmb3g"/><path class="wstek7eqi"/></g>`,
		"fallback": "tabler:graph-off",
	});
}

export default Component;
