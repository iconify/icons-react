import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wzcru5bjk.css';
import '../../css/h/hlfjjubrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wm-k wzcru5bjk"/><path class="hlfjjubrp wm-a"/></g>`,
		"fallback": "withicons:chevrons-right-gloss",
	});
}

export default Component;
