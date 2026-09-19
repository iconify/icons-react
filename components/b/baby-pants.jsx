import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/l/l8ifr32lo.css';
import '../../css/k/kmbmv0y3w.css';
import '../../css/r/revha38mc.css';
import '../../css/g/g6oxp7zue.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="l8ifr32lo"/><path class="kmbmv0y3w"/><path class="revha38mc"/><path class="g6oxp7zue"/></g>`,
		"fallback": "icon-park:baby-pants",
	});
}

export default Component;
