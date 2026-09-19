import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/p/pujtioooa.css';
import '../../css/g/glxmc61cx.css';
import '../../css/y/yw6q8-bqq.css';
import '../../css/s/sghdsebar.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><circle class="pujtioooa"/><path class="glxmc61cx"/><path class="yw6q8-bqq"/><path class="sghdsebar"/></g>`,
		"fallback": "icon-park-solid:baby-one",
	});
}

export default Component;
