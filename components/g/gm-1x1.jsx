import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9qcacyl.css';
import '../../css/g/g9ifcdclz.css';
import '../../css/s/su6r31bkw.css';
import '../../css/j/jkvrthb0u.css';
import '../../css/i/ixyo2d5ny.css';
import '../../css/k/ksndlhbcy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv9qcacyl"><path class="g9ifcdclz"/><path class="su6r31bkw"/><path class="jkvrthb0u"/><path class="ixyo2d5ny"/><path class="ksndlhbcy"/></g>`,
		"fallback": "flag:gm-1x1",
	});
}

export default Component;
