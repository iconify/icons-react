import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/d/drvoadt8u.css';
import '../../css/z/zzmzu9bzw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path clip-rule="evenodd" class="drvoadt8u"/><path class="zzmzu9bzw"/></g>`,
		"fallback": "icon-park-outline:drop-shadow-right",
	});
}

export default Component;
