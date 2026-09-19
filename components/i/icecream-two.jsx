import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/z/z2e5f5b3x.css';
import '../../css/e/e6ddg3v6m.css';
import '../../css/u/uqb71abkm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="z2e5f5b3x"/><path class="e6ddg3v6m"/><path class="uqb71abkm"/></g>`,
		"fallback": "icon-park-solid:icecream-two",
	});
}

export default Component;
