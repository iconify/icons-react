import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/c/c0gw1rz3d.css';
import '../../css/a/acieqsbmw.css';
import '../../css/t/tiu7hrbyy.css';
import '../../css/w/wuhcfpogt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="c0gw1rz3d"/><rect class="acieqsbmw"/><path class="tiu7hrbyy"/><path class="wuhcfpogt"/></g>`,
		"fallback": "icon-park:hat",
	});
}

export default Component;
