import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yrc3655hb.css';
import '../../css/d/dma2o-b6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yrc3655hb"/><path class="dma2o-b6v"/></g>`,
		"fallback": "solar:gallery-favorite-outline",
	});
}

export default Component;
