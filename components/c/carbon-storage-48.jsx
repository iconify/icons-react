import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8mp0wbzm.css';
import '../../css/d/dwl2-5bwr.css';
import '../../css/u/unf30navr.css';
import '../../css/z/zrr3btyck.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8mp0wbzm"/><path class="dwl2-5bwr"/><path class="unf30navr"/><path class="zrr3btyck"/>`,
		"fallback": "energy-icons:carbon-storage-48",
	});
}

export default Component;
