import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zcps1lb0e.css';
import '../../css/m/m248ptw6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wm-k zcps1lb0e"/><path class="m248ptw6z wm-s"/></g>`,
		"fallback": "withicons:image-sparkles-gloss",
	});
}

export default Component;
