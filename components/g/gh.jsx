import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/klzfnpbwd.css';
import '../../css/p/pariyhblm.css';
import '../../css/b/bw-gev08g.css';
import '../../css/e/etrreifsd.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="klzfnpbwd"/><path class="pariyhblm"/><path class="bw-gev08g"/><path class="etrreifsd"/></g>`,
		"fallback": "cif:gh",
	});
}

export default Component;
