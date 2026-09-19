import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/t/t3sglob4m.css';
import '../../css/z/zzmzu9bzw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path clip-rule="evenodd" class="t3sglob4m"/><path class="zzmzu9bzw"/></g>`,
		"fallback": "icon-park-solid:drop-shadow-right",
	});
}

export default Component;
