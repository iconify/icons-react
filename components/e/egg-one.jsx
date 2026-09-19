import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/e/e-yqelbcm.css';
import '../../css/r/rxa6cdc4l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="e-yqelbcm"/><path class="rxa6cdc4l"/></g>`,
		"fallback": "icon-park:egg-one",
	});
}

export default Component;
