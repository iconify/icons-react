import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/t/taetgzrim.css';
import '../../css/a/augjm-bnx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="taetgzrim"/><path class="augjm-bnx"/></g>`,
		"fallback": "icon-park-solid:distribute-vertical-spacing",
	});
}

export default Component;
